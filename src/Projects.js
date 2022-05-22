import React, {useState} from 'react';
import './Projects.css';

const Projects = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="all-projects" onClick = {() => setHidden(s => !s)}>
			<h2>Projects</h2>
			{hidden ? <p>all of my projects</p> : null}
		</div>
	);
}

export default Projects;
