import React from "react";
import "./styles.css";

export default function App() {
  const isHappy = false;
  return (
    <div>
      <Smiley isHappy={isHappy} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return isHappy ? "🥹" : "🥺";
}
