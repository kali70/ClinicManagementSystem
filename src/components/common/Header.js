import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">الرئيسية</IndexLink>
			{" | "}
			<Link to="/about" activeClassName="active">من نحن</Link>
		</nav>
	);
};

export default Header;