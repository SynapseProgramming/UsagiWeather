import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Thermostat from "react-nest-thermostat";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = (props) => {
  const [sensorData, setSensorData] = useState({});
  const [isLoading, setLoading] = useState(true);

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
          setSensorData(response);
        })
        .catch((e) => console.error("Exception thrown", e.stack));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateData();
      if (isLoading) setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading == false) {
    // main return when there is data available
    return (
      <Thermostat
        height="400px"
        width="400px"
        ambientTemperature={sensorData.temp}
        targetTemperature={sensorData.temp}
        hvacMode="cooling"
      />
    );
  }

  return <p>Loading!</p>;
};

export default DashBoard;
