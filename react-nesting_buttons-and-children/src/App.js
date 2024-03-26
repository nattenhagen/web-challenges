import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"Uno"}</Button>
      <Button>{"Dos"}</Button>
      <Button>{"Tres"}</Button>
      <Button>{"Quatorze"}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
