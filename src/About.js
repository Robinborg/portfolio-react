import React from 'react';
import './index.css';
import profile from './profile_1mb.png';

const myImage = () => {
	return <img 
	src={profile} 
	alt="myImage" 
	className="profile-picture"/>;
};

const About = () => {
	return (
		<div>
			<div className="profile-setup">
			<h1> Robin Borgström</h1>
				{myImage()}
			</div>
		  <div className="about-me" id="aboutId">
			<h2>About me</h2>
			<div className="about-box">
				<p>Two years ago I began learning programming to better understand logic and mathematics.</p>
				<p>I started learning Python because it was a recommended first language and later I could use it for machine learning and data analysis.</p>
				<p>As I was learning Python,  it became clear that Python did a lot for me. That lead me to learning C++ to understand the lower-level logic and have better control of my programs.</p>
				<p>Currently I am learning Web Development to make websites. I am in the process of learning Javascript, HTML, CSS, Typescript and React.</p> 
				<p>On Github you can find all of my projects and I have chosen to show a few of them here with a summary.</p>
				<p> I think consistency is necessary for success. Each day I learn mathematics and algorithms, write code for projects and write a small program in Javascript, Python or C++. I think it's good for consistency to be accountable, so I tweet each day what I have done. </p>
				<p>
					You can hold me accountable here:
				</p>
				<a href="https://twitter.com/RobinBorgstr_m">
					<i className="twitter icon">
					</i>
						Twitter</a>
			</div>
		</div>
	</div>
	);
}

export default About;
