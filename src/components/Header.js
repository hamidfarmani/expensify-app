import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link">Log out</button>
      </div>
    </div>
  </header>
);
