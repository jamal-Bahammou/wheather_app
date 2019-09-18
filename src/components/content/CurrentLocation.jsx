import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CitieCard from './CitieCard';

class CurrentLocation extends Component {
	render() {
		const { load, city } = this.props;
		return (
			<div className='current noselect'>
				<div className='title animated fadeIn'>
					<i className='fas fa-map-marker-alt fa-2x fa-fw' />
					<h1 className='title__text'>Current Location</h1>
				</div>
				<Link to='/detail' style={{ textDecoration: 'none' }}>
					<CitieCard load={load} city={city} />
				</Link>
			</div>
		);
	}
}

export default CurrentLocation;
