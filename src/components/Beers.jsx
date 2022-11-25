import React from "react";
import "./beers.css";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  console.log(beers);
  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="oneBeerDetailsImage">
            <img className="beersImages" src={beer.image_url} alt="beers" />
            <div className="BeerDetails">
              <h2>{beer.name}</h2>
              <h4>{beer.tagline}</h4>
              <h5>{beer.contributed_by}</h5>
              <Link to={`/beers/${beer._id}`}>Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
