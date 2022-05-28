import React from 'react';

const Projects = () => {

	return (
		<div className="main-project" id="projectsId">
		  <h2>Projects</h2>
			<div className="all-projects">
				<div className="single-project">
				<h4>Invoice Program</h4>
					<p>Command-line program that creates custom invoices. Stores products, customers and invoices in a database.</p>
					<br></br>
					<a href="https://github.com/robinborg/invoice_program">Github Link to Program</a>
				</div>
				<div className="single-project">
				<h4>Note Taking App</h4>
					<p>Command-line program to keep notes on books, podcasts and plain notes.</p>
					<br></br>
					<a href="https://github.com/robinborg/note_taking_app">Github Link to Program</a>
				</div>
				<div className="single-project">
				<h4>Portfolio Site</h4>
					<p>Portfolio site built with React. Hosted on AWS Amplify.</p>
					<br></br>
					<a href="https://github.com/robinborg/portfolio-react">Github Link to Program</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
