import PropTypes from "prop-types";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const DeleteAll = () => {
  const url = "api/v1/weathers/destroy";
  let is_mounted = true;
  if (is_mounted) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        Console.log("Everything was deleted!");
      })
      .catch((e) => console.error("Exception thrown", e.stack));
  }
};

const ToolBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto">
          <Navbar.Brand as={Link} to="/dashboard">
            Usagi Weather
          </Navbar.Brand>
          <Nav.Link as={Link} to="/graph">
            View Graph
          </Nav.Link>
        </Nav>
        <form class="form-inline">
          <button
            class="btn btn-danger"
            type="button"
            onClick={() => {
              DeleteAll();
              console.log("pressed!");
            }}
          >
            Delete All
          </button>
        </form>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default ToolBar;
