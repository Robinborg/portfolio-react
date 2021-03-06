import React from 'react';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './Navbar';

const App = () => {
	return (
		<div className="center-all">
		  <NavBar/>
		  <About/>
		  <Projects/>
		  <Contact/>
		</div>
	);
};

export default App;
