import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Toolbar from "../components/Toolbar";
import Graph from "../components/Graph";

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Toolbar />,
      children: [
        {
          path: "/graph",
          element: <Graph />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
