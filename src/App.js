import React from 'react';
import About from './About.js';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
	return (
		<div>
		  <About/>
			<div className="box">
			<Projects/>
			<Contact/>
			</div>
		</div>
	);
};

export default App;
