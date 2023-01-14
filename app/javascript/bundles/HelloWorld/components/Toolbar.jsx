import PropTypes from "prop-types";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
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
  const [DeletePressed, setDeletePressed] = useState(false);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto">
          <img
            src={require('../UsagilogoSVG.svg')}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Brand as={Link} to="/dashboard">
            Usagi Weather
          </Navbar.Brand>
          <Nav.Link as={Link} to="/graph">
            View Graph
          </Nav.Link>
        </Nav>
        <button
          class="btn btn-danger"
          type="button"
          onClick={() => {
            setDeletePressed(true);
          }}
        >
          Delete All
        </button>
        <Modal
          show={DeletePressed}
          onHide={() => {
            setDeletePressed(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You are about to delete all weather records. Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setDeletePressed(false);
              }}
            >
              No
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                DeleteAll();
                setDeletePressed(false);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default ToolBar;
