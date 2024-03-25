import React from "react";
import "./styles.css";

const Article = () => {
  return (
    <article className="article">
      <h2 className="article__title">Berlin</h2>
      <label htmlFor="inputField">Eingabefeld:</label>
      <input id="inputField" type="text" />
      <a className="article__link" href="https://en.wikipedia.org/wiki/Berlin">
        Erfahre mehr
      </a>
    </article>
  );
};

export default Article;
