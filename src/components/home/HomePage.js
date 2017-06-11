import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>عيادة النرجس لطب و جراحة الفم و الاسنان</h1>
				<p>صحتك تهمنا</p>
				<Link to="about" className="btn btn-primary btn-lg">Lear More</Link>
			</div>
		);
	}
}

export default HomePage;
