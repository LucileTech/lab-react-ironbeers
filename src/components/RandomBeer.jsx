import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./beers.css";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(({ data }) => {
        console.log("tototototo", data);
        setRandomBeer(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log("lilili", randomBeer);

  if (!randomBeer) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <img src={randomBeer.image_url} className="beersImages" alt="beers" />
      <div>
        <h2>{randomBeer.name}</h2>
        <h4>{randomBeer.tagline}</h4>
        <h4>{randomBeer.first_brewed}</h4>
        <h4>{randomBeer.attenuation_level}</h4>
        <h5>{randomBeer.description}</h5>
        <h5>{randomBeer.contributed_by}</h5>
      </div>
    </>
  );
};

export default RandomBeer;
