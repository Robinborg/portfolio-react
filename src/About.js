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
				<p>
					Started learning programming to better understand mathematics and logic.
				</p>
					<p>
						Quickly noticed programming was meant for me. 
					</p>
				<p>
					Continuously learning Computer Science and mathematics to be a better skilled programmer.
				</p>
				<p>
					First programming language was Python.
				</p>
				<p>
					Started learning web development to make websites and land a job quickly. 
				</p>
			<p>
				Taught myself Javascript, HTML, CSS, React and Redux.
			</p>
				<p>
					Working as a front-end developer at a finnish finance company. 
				</p>
				<p> 
          Daily working with React and Redux.
				</p>
				<p>
					Get to learn C#, .NET and SQL on the job.
				</p>
			</div>
		</div>
	</div>
	);
}

export default About;
