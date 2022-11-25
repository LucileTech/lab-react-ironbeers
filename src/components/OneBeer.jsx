import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./beers.css";

const OneBeer = ({ beers }) => {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const detailedBeer = beers.find((El) => {
    return El._id.includes(id);
  });
  console.log(detailedBeer);
  return (
    <div>
      <img src={detailedBeer.image_url} className="beersImages" alt="beers" />
      <div>
        <h2>{detailedBeer.name}</h2>
        <h4>{detailedBeer.tagline}</h4>
        <h4>{detailedBeer.first_brewed}</h4>
        <h4>{detailedBeer.attenuation_level}</h4>
        <h5>{detailedBeer.description}</h5>
        <h5>{detailedBeer.contributed_by}</h5>
      </div>
    </div>
  );
};

export default OneBeer;
