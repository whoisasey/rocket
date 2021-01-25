import React from 'react'
import {NavLink} from 'react-router-dom';

const Nav = () => {
	return (
		<ul className="ui menu">
			<li className="item">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="item">
				<NavLink to="/create">
					New Route
				</NavLink>
			</li>
			<li className="item">
				<NavLink to='/routes'>Get Routes</NavLink>
			</li>
		</ul>
	)
}

export 	default Nav