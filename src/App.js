import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer.jsx";
import OneBeer from "./components/OneBeer.jsx";
import NewBeer from "./components/NewBeer.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        // console.log("tatatatataa", data);
        setBeers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<NavBar />}>
          <Route path="/beers" element={<Beers beers={beers} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:id" element={<OneBeer beers={beers} />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
