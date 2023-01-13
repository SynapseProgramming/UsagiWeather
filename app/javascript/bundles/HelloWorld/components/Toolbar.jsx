import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import {Outlet, Link} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap";




const ToolBar = (props) => {

  return (
    <div>
		<Navbar bg="dark" variant="dark">
			<Nav className="ml-auto">
				<Navbar.Brand as={Link} to="/">
					Usagi Weather
				</Navbar.Brand>
				<Nav.Link as={Link} to="/graph">
                    View Graph
                </Nav.Link>
			</Nav>
		</Navbar>
		<Outlet />
	</div>

  );
};

export default ToolBar;
