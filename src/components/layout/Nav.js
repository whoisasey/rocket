import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom';


export const Nav = () => {
	return (
		<ul className="ui menu">
			<li className="item">
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="item">
				<NavLink to="/create">
					New Project
				</NavLink>
			</li>
			<li className="item">
				<NavLink to='/routes'>Get Routes</NavLink>
			</li>
		</ul>
	)
}

export 	default Nav