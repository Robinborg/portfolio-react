import React from 'react';

const Contact = () => {
	return (
		<div className="all-contacts" id="contactId">
			<h2>Contact Details</h2>
				<p>Email: robin.c.borgstrom@gmail.com</p>
			<a href="https://www.linkedin.com/in/robin-borgstroem/">
				<i className="linkedin icon"></i>
			LinkedIn Profile
			</a>
			<br/>
			<a href="https://twitter.com/RobinBorgstr_m">
				<i className="twitter icon"></i>
			Twitter Profile
			</a>
			<br/>
			<a href="https://github.com/robinborg">
				<i className="github icon"></i>
				Github Profile
			</a>
		</div>
	);
};

export default Contact;
