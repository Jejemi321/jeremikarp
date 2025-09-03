function Contact() {
	return (
		<div className='max-w-md p-8 mx-auto mt-10 bg-white rounded shadow'>
			<h1 className='mb-4 text-3xl font-bold text-center'>Contact Us</h1>
			<p className='mb-6 text-center text-gray-700'>
				If you have any questions, feel free to reach out!
			</p>
			<form className='space-y-4'>
				<div>
					<label
						htmlFor='name'
						className='block mb-1 text-sm font-medium text-gray-700'>
						Name:
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-1 text-sm font-medium text-gray-700'>
						Email:
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
				</div>
				<div>
					<label
						htmlFor='message'
						className='block mb-1 text-sm font-medium text-gray-700'>
						Message:
					</label>
					<textarea
						id='message'
						name='message'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						rows={4}></textarea>
				</div>
				<button
					type='submit'
					className='w-full px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700'>
					Send
				</button>
			</form>
			<p className='mt-6 text-center text-gray-600'>
				We will get back to you as soon as possible.
			</p>
		</div>
	);
}

export default Contact;
