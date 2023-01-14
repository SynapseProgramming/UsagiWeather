import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// const DeleteAll = () => {
//   const url = "api/v1/weathers/destroy";
//   let is_mounted = true;
//   if (is_mounted) {
//     fetch(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then((response) => {
//         Console.log("Everything was deleted!");
//       })
//       .catch((e) => console.error("Exception thrown", e.stack));
//   }
// };

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
