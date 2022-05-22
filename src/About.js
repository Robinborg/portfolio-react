import React, {useState} from 'react';
import './About.css';

const About = (props) => {
	const [hidden, setHidden] = useState(false)


	return (
		<div className="about-me" onClick = {() => setHidden(s => !s)}>
			<h1> Robin Borgström</h1>
			<h3>About me</h3>
			{hidden ? <p>Some more information about me</p> : null}
		</div>
	);
}

export default About;
