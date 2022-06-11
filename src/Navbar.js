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
					className="box-link"
				>
					About
				</Link>
			</div>
			<div>
				<Link activeClass="active"
					to="projectsId"
					spy
					smooth
					duration={500}
				  className="box-link">
					Projects
				</Link>
			</div>
			<div>
				<Link activeClass="active"
					to="contactId"
					spy
					smooth
					duration={500}
				  className="box-link">
					Contact
				</Link>
			</div>
		</div>
	);
};
export default NavBar;
