import React from "react";
import "./styles.css";

const Sum = ({ valueA, valueB }) => {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
};

export default function App() {
  return (
    <div className="App">
      <Sum valueA={5} valueB={3} />
    </div>
  );
}
