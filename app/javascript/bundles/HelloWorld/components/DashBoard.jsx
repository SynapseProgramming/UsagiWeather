import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Thermostat from "react-nest-thermostat";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Doughnut from "./Donut";
import "bootstrap/dist/css/bootstrap.min.css";

const DashBoard = (props) => {
  const [sensorData, setSensorData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [Humid, setHumid] = useState([]);

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
          setHumid([response.humid, 100 - response.humid]);
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
      <div class="card-group">
        <Card className="text-center">
          <Card.Header>Temperature</Card.Header>
          <Card.Body>
            <Card.Title>
              The current temperature is {sensorData.temp} C
            </Card.Title>

            <Thermostat
              height="300px"
              width="300px"
              ambientTemperature={sensorData.temp}
              targetTemperature={sensorData.temp}
              hvacMode="cooling"
            />
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header>Humidity</Card.Header>
          <Card.Title>The current Humidity is {Humid[0]}%</Card.Title>
          <Card.Body>
            <Doughnut data={Humid} />
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header>Pressure & Altitude</Card.Header>
          <Card.Body>
            <p class="fw-bold fs-4">Current Pressure: {sensorData.press / 1000} kPa</p>
            <p class="fw-bold fs-4  "> Current Altitude: {sensorData.alt} M </p>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <p>Loading!</p>;
};

export default DashBoard;
