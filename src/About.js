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
				<p>Two years ago I began learning programming to better understand logic and mathematics.</p>
				<p>I started learning Python because it was a recommended first language and later I could use it for machine learning and data analysis.</p>
				<p>As I was learning Python,  it became clear that Python did a lot for me. That lead me to learning C++ to understand the lower-level logic and have better control of my programs.</p>
				<p>Now I am focused on learning Web Development to make websites. I am in the process of learning Javascript, HTML, CSS, Typescript and React.</p> 
				<p>On Github you can find several projects I have written and I have chosen a few of them for this website with a summary for them.</p>
				<p>Consistency is a constant for success, that is why each day I learn mathematics, learn about algorithms, write code for my projects and make a small daily program. Accountability is necessary for consistency, that is why I tweet each day what I have done.</p>
				<p>
					You can follow my progress on Twitter
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
