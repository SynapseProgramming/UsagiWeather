import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = (props) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
    </div>
  );

};

export default DashBoard;
