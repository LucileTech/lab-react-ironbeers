import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./HomePage.css";
import allBeers from "../assets/beers.png";

const HomePage = () => {
  return (
    <div>
      <section className="HomePage">
        <img src={allBeers} alt="beer" />
        <Link to="/beers">Beers</Link>

        <Link to="/random-beer">Random Beers</Link>

        <Link to="/new-beer">New Beer</Link>
      </section>
    </div>
  );
};

export default HomePage;
