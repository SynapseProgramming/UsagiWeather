import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = (props) => {
  const [sensorData, setSensorData] = useState();

  const updateData = () => {
    const url = "api/v1/weathers/latest";
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
          console.log(response);
          //   Console.log("Everything was deleted!");
        })
        .catch((e) => console.error("Exception thrown", e.stack));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Dashboard!</p>;
};

export default DashBoard;
