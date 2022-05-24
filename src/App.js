import React from 'react';
import About from './About.js';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
	return (
		<>
		<div className="box">
		  <About/>
			<Contact/>
		</div>
		<div>
			<Projects/>
		</div>
		</>
	);
};

export default App;
