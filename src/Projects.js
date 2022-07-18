import React from 'react';

const Projects = () => {

	return (
		<div className="main-project" id="projectsId">
		  <h2>Projects</h2>
			<div className="all-projects">
				<div className="single-project">
				<h4>Invoice Program</h4>
					<p>Command-line program that creates PDF invoices with ReportLab. Stores products, customers and invoices with SQLAlchemy handlers in a SQLite database.</p>
					<a 
					  href="https://github.com/robinborg/invoice_program"
						className="box-link">
					<i className="github icon"></i>Github
					</a>
				</div>
				<div className="single-project">
				<h4>Note Taking App</h4>
					<p>Command-line program that stores Notes, Books title and review, Podcast title and review and Website url and review with PyMongo handlers in a MongoDB. The Website Module can gather all links from a website.</p>
					<a 
						className="box-link"
					href="https://github.com/robinborg/note_taking_app">
						<i className="github icon"></i>Github
					</a>
				</div>
				<div className="single-project">
				<h4>Portfolio Site</h4>
					<p>This Portfolio site built with React and Hosted on AWS Amplify.</p>
					<a 
						className="box-link" 
					  href="https://github.com/robinborg/portfolio-react">
						<i className="github icon"></i>Github
					</a>
				</div>
				<div className="single-project">
				<h4>Gym App</h4>
					<p>Program that helps the user Gym. The program was written with React and Redux. User can enter exercises and select a break length of 3, 4 or 5 minutes. Try the app here: &ensp;
					<a 
						className="gym-app"
						href="https://robinborg.github.io/gym-app/">gym-app</a>
					</p>
					<br/>
					<a 
				    href="https://github.com/robinborg/gym-app"
				  	className="box-link">
						<i className="github icon"></i>Github
					</a>
				</div>
				</div>
			</div>
	);
}

export default Projects;
