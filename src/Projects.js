import React from 'react';

const Projects = () => {

	return (
		<div className="main-project" id="projectsId">
		  <h2>Projects</h2>
				<div className="single-project">
				<h4>Gym App</h4>
					<p>
					  Gym app for training.
					</p>
					<p>
					  Pick your rest time, track your sets and repetitions.
					</p>
					<p>
						The program was written with React and Redux. 
					</p>
					<a 
				    href="https://github.com/robinborg/gym-app"
				  	className="box-link">
						<i className="github icon"></i>Github
					</a>
				</div>
			<div className="all-projects">
				<div className="single-project">
				<h4>Invoice Program</h4>
					<p>
						Create your own PDF invoices.
					</p>
					<p>
					  Store products, customers and invoices in an in-memory databse.
					</p>
					<a 
					  href="https://github.com/robinborg/invoice_program"
						className="box-link">
					<i className="github icon"></i>Github
					</a>
				</div>
				<div className="single-project">
				<h4>Portfolio Site</h4>
					<p>
					  This Portfolio site built with React and Hosted on AWS Amplify.
					</p>
					<a 
						className="box-link" 
					  href="https://github.com/robinborg/portfolio-react">
						<i className="github icon"></i>Github
					</a>
				</div>
				</div>
			</div>
	);
}

export default Projects;
