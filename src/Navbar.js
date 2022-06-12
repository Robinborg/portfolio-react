import React from 'react';
import {Link} from 'react-scroll';
import './index.css';

const NavBar = () => {
	return (
		<div className="box">
			<div>
				<Link activeClass="active"
					to="aboutId"
					spy
					smooth
					duration={500}
				>
					About
				</Link>
			</div>
			<div>
				<Link activeClass="active"
					to="projectsId"
					spy
					smooth
					duration={500}>
					Projects
				</Link>
			</div>
			<div>
				<Link activeClass="active"
					to="contactId"
					spy
					smooth
					duration={500}>
					Contact
				</Link>
			</div>
		</div>
	);
};
export default NavBar;
