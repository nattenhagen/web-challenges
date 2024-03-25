import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <div>
      <h1>Hello World</h1>
      <article>
        <p>This is so cool!</p>
      </article>
    </div>
  );
}
