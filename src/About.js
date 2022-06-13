import React from 'react';
import './index.css';
import profile from './profile_1mb.png';

const myImage = () => {
	return <img src={profile} alt="myImage"/>;
};

const About = () => {
	return (
		<div>
			<div className="profile-setup">
			<h1> Robin Borgström</h1>
			{myImage()}
			</div>
		  <div className="about-me" id="aboutId">
			<br></br>
			<div className="about-box">
			<h2>About me</h2>
				<p>I am a self-taught programmer. 
				The first language I learned was Python, then some C++ and now
			   Javascript & React, HTML and CSS.
					My goal is to be a data scientist. Before getting into Data Science I want to work as a programmer or web developer. To build

				up an intuition of how programs and algorithms function.
			</p>
				<p>
					My days are focused on learning Discrete Mathematics and Calculus, Data Structures and Algorithms, and working on my projects on Github.
				</p>
				<p>
					You can follow my progress on Twitter
				</p>
				<a href="https://twitter.com/RobinBorgstr_m">Twitter</a>
			</div>
		</div>
	</div>
	);
}

export default About;
