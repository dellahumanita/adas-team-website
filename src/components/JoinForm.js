// Import libraries
import React, { useState } from "react";

const JoinForm = () => {
	const [email, setEmail] = useState("");
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [faculty, setFaculty] = useState("");
	const [studentAff, setStudentAff] = useState("");

	/** https://codepen.io/bzerangue/pen/ExaBMXj **/
	return (
		<div id="connect-form" className="bg-light-blue p-5 rounded-lg md:my-7 max-w-6xl lg:mx-auto">
			<form
				action="https://adasteam.us18.list-manage.com/subscribe/post"
				noValidate
				className="flex flex-col"
			>
				<input type="hidden" name="u" value="9d8e6ca3c4618877981922611" />
				<input type="hidden" name="id" value="8ac3f17ed3" />

				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-6">
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
							First name
						</label>
						<input
							id="first-name"
							type="name"
							name="FNAME"
							value={first}
							onChange={(e) => {
								setFirst(e.target.value);
							}}
							autoComplete="given-name"
							className="mt-1 focus:outline-none focus:ring focus:border-blue-50 "
							aria-required="false"
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
							Last name
						</label>
						<input
							id="last-name"
							type="name"
							name="LNAME"
							value={last}
							onChange={(e) => {
								setLast(e.target.value);
							}}
							autoComplete="family-name"
							className="mt-1 focus:outline-none focus:ring focus:border-blue-50 "
							aria-required="false"
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="studentAff" className="block text-sm font-medium text-gray-700">
							Student Affiliation
						</label>
						<select
							id="studentAff"
							type="name"
							name="MMERGE3"
							value={studentAff}
							onChange={(e) => {
								setStudentAff(e.target.value);
							}}
							aria-required="true"
							className="mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:outline-none focus:ring focus:border-blue-50  sm:text-sm"
						>
							<option>Undergraduate Student</option>
							<option>Graduate Student</option>
							<option>High School</option>
							<option>Staff</option>
							<option>Faculty</option>
							<option>Alumni</option>
							<option>Student Group</option>
							<option>Industry Partner</option>
						</select>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
							Faculty
						</label>
						<select
							id="faculty"
							type="name"
							name="MMERGE4"
							value={faculty}
							onChange={(e) => {
								setFaculty(e.target.value);
							}}
							aria-required="false"
							className="mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:outline-none focus:ring focus:border-blue-50  sm:text-sm"
						>
							<option>Arts</option>
							<option>Business</option>
							<option>Computer Science</option>
							<option>Education</option>
							<option>Engineering</option>
							<option>Science</option>
							<option>Other</option>
						</select>
					</div>
					<div className="md:col-start-3 md:col-span-3 col-start-3 col-span-4">
						<button type="submit" className="active:bg-blue-700 ">
							JOIN
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default JoinForm;
