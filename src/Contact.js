import React, {useState} from 'react';
import './Contact.css';

const Contact = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="all-contacts" onClick={() => setHidden(s => !s)}>
			<h2>Contact Details</h2>
			{hidden ? <div>
				<p>Email: robin.borgatrom@gmail.com</p>
				<p>LinkedIn: https://www.linkedin.com/in/robin-borgstroem/</p>
				<p>Twitter: https://twitter.com/RobinBorgstr_m</p>
			</div> : null}
		</div>
	);
};

export default Contact;
