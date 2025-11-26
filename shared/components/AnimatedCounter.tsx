"use client";

import { useRef } from "react";
import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";

const AnimatedCounter = ({
	to,
	delay = 0.25,
}: {
	to: number;
	delay?: number; // make delay optional
}) => {
	// Explicitly type the ref
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true });
	const from = 0;

	useIsomorphicLayoutEffect(() => {
		const element = ref.current;

		if (!element) return;
		if (!inView) return;

		// Set initial value
		element.textContent = String(from);

		// If reduced motion is enabled
		if (window.matchMedia("(prefers-reduced-motion)").matches) {
			element.textContent = String(to);
			return;
		}

		const controls = animate(from, to, {
			duration: 3,
			ease: "easeInOut",
			delay: delay,
			onUpdate(value) {
				element.textContent = value.toFixed(0);
			},
		});

		// Cancel on unmount
		return () => controls.stop();
	}, [inView, from, to, delay]);

	return <span ref={ref} />;
};

export default AnimatedCounter;
