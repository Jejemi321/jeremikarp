"use client";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { useTranslations } from "next-intl";
import { ContactInfo, SocialMedia } from "@/shared/constant/data";
import AnimatedLink from "../AnimatedLink";

function ContactInfoResume() {
	const [Show, setShow] = useState<boolean>(false);
	const tSection = useTranslations("sectionTitle");
	return (
		<>
			<div className='flex justify-between'>
				<SectionTitle>{tSection("ContactInfo")}</SectionTitle>
				<p
					className='cursor-pointer'
					onClick={() => {
						setShow(!Show);
					}}>
					{!Show ? "Show" : "Hide"}
				</p>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{ContactInfo.map(el => (
					<AnimatedLink el={el} Show={Show} key={el.id} />
				))}

				{SocialMedia.map(el => (
					<AnimatedLink el={el} Show={Show} key={el.id} />
				))}
			</div>
		</>
	);
}

export default ContactInfoResume;
