// Import libraries
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Import components
import Header from "../components/Header";

// Import assets
import connect_image from "../assets/img/PageHeaders/connect.svg";

/**
 *
 * @returns
 */
const Connect = () => {
	// React hook
	const [state, handleSubmit] = useForm("mrgredan");
	const [email, setEmail] = useState("");
	// /const [first, setFirst] = useState("");
	// const [last, setLast] = useState("");

	// TODO: display success message
	if (state.succeeded) {
		return <p>Thanks for connecting!</p>;
	}

	return (
		<main id="main-content" className="page">
			<title
				id="connect_image"
				className="max-w-6xl mx-auto flex flex-col items-center justify-between lg:flex-row-reverse animate-fade-in-down"
			>
				{/* Connect image */}
				<img
					id="connect"
					src={connect_image}
					alt="person sending paper airplane"
					className="hidden md:inline-block w-screen px-16 lg:w-auto lg:px-0 lg:h-72"
				/>

				<Header
					title="Connect With Us"
					subtitle="We’d love to get in touch with you! Connect with us through email or any of our social media."
				/>
			</title>

			<div>
				<h3 className="text-center mb-10">SEND A MESSAGE</h3>

				<section
					id="connect-form"
					className="bg-light-blue p-5 rounded-lg mx-18 max-w-6xl lg:mx-auto md:16 lg:mb-10"
				>
					<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
						<label htmlFor="email" className="font-medium text-gray-700 ">
							Email Address
						</label>
						<input
							required
							aria-required="true"
							id="email"
							type="email"
							name="EMAIL"
							className="focus:outline-none focus:ring focus:border-blue-50 "
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<ValidationError prefix="Email" field="email" errors={state.errors} />

						<label htmlFor="name" className="font-medium text-gray-700 ">
							Name
						</label>
						<input
							id="name"
							type="name"
							name="name"
							className="mt-1 focus:outline-none focus:ring focus:border-blue-50 "
							aria-required="false"
						/>

						<label htmlFor="subject" className="font-medium text-gray-700 ">
							Subject
						</label>
						<input
							id="subject"
							type="subject"
							name="subject"
							className="w-full mt-1 focus:outline-none focus:ring focus:border-blue-50 "
							aria-required="true"
						/>

						<label htmlFor="message" className="font-medium text-gray-700 ">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full mt-1 focus:outline-none focus:ring focus:border-blue-50 "
							aria-required="true"
						/>
						<ValidationError prefix="Message" field="message" errors={state.errors} />

						<button type="submit" disabled={state.submitting} className="w-3/6 justify-self-center">
							SEND MESSAGE
						</button>
					</form>
				</section>
			</div>
		</main>
	);
};

export default Connect;
