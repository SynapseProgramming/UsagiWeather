import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { TimeSeries, TimeRange } from "pondjs";

import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";

const sampleSeries = {
  name: "test1",
  columns: ["time", "value"],
  points: [],
};

let temp = JSON.parse(JSON.stringify(sampleSeries));
temp["name"] = "temp";

let press = JSON.parse(JSON.stringify(sampleSeries));
temp["name"] = "press";

let humid = JSON.parse(JSON.stringify(sampleSeries));
humid["name"] = "humid";

let alt = JSON.parse(JSON.stringify(sampleSeries));
alt["name"] = "alt";

const Graph = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [mainTemp, setmainTemp] = useState();
  const [mainPress, setmainPress] = useState();
  const [mainHumid, setmainHumid] = useState();
  const [mainAlt, setmainAlt] = useState();

  useEffect(() => {
    const url = "api/v1/weathers/read";
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
          response.forEach((element) => {
            let timeConvert = new Date(element.created_at);
            let timeu = timeConvert.getTime();
            temp["points"].push([timeu, parseFloat(element.temp)]);
            press["points"].push([timeu, parseFloat(element.press) / 1000]);
            humid["points"].push([timeu, parseFloat(element.humid)]);
            alt["points"].push([timeu, parseFloat(element.alt)]);
          });

          if (isLoading) {
            // enforce time sort my chronological order

            temp.points.sort();
            press.points.sort();
            humid.points.sort();
            alt.points.sort();
            setmainTemp(new TimeSeries(temp));
            setmainPress(new TimeSeries(press));
            setmainHumid(new TimeSeries(humid));
            setmainAlt(new TimeSeries(alt));

            setLoading(false);
          }
        })
        .catch((e) => console.error("Exception thrown", e.stack));
    }

    return () => {
      is_mounted = false;
    };
  }, []);

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <div>
      <h2>Some neat graphs</h2>
      <ChartContainer timeRange={mainTemp.timerange()} width={1000}>
        <ChartRow height="150">
          <YAxis
            id="axis1"
            label="Temperature degC"
            min={0}
            max={40}
            width="60"
            type="linear"
            format=",.2f"
          />
          <Charts>
            <LineChart
              axis="axis1"
              series={mainTemp}
              column={["Temperature"]}
            />
          </Charts>
        </ChartRow>

        <ChartRow height="150">
          <YAxis
            id="axis2"
            label="Pressure kPa"
            min={0}
            max={110}
            width="100"
            type="linear"
            format=",.2f"
          />
          <Charts>
            <LineChart axis="axis2" series={mainPress} column={["Pressure"]} />
          </Charts>
        </ChartRow>
        <ChartRow height="150">
          <YAxis
            id="axis3"
            label="Humidity (%)"
            min={0}
            max={100}
            width="100"
            type="linear"
            format=",.2f"
          />
          <Charts>
            <LineChart axis="axis3" series={mainHumid} column={["Humidity"]} />
          </Charts>
        </ChartRow>
        <ChartRow height="150">
          <YAxis
            id="axis4"
            label="Altitude (m)"
            min={0}
            max={200}
            width="100"
            type="linear"
            format=".2f"
          />
          <Charts>
            <LineChart axis="axis4" series={mainAlt} column={["Altitude"]} />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </div>
  );
};

export default Graph;
