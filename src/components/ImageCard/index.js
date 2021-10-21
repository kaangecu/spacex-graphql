import React from "react";
import falcon1 from "../../assets/falcon1.jpeg";
import falconHeavy from "../../assets/falconHeavy.webp";
import qq from "../../assets/qq.png";
import { CardContainer, InfoContainer, ListItem } from "./styles.js";

const ImageCard = ({
  data: {
    name,
    success_rate_pct,
    wikipedia,
    active,
    boosters,
    company,
    cost_per_launch,
    country,
    description,
    diameter: { meters: diameter_meters },
    first_flight,
    height: { meters: height_meters },
    mass: { kg: mass_kg },
    payload_weights,
  },
}) => {
  return (
    <CardContainer>
      <div>
        <img src={qq} alt="Girl in a jacket" width="300px" height="auto" />
      </div>
      <InfoContainer>
        <h3 class="card-header">{name}</h3>
        <div class="card-body">
          <h5 class="card-title">{company}</h5>
          <h6 class="card-subtitle text-muted">{country}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <ListItem className="list-group-item">
            First Flight : {first_flight}
          </ListItem>
          <ListItem className="list-group-item">
            Success Rate : %{success_rate_pct}
          </ListItem>
          <ListItem className="list-group-item">Mass : {mass_kg} kg</ListItem>
          <ListItem className="list-group-item">
            Height : {height_meters} m
          </ListItem>
          <ListItem className="list-group-item">
            Diameter : {diameter_meters} m
          </ListItem>
          <ListItem className="list-group-item">
            Cost Per Launch : {cost_per_launch}$
          </ListItem>
          <ListItem className="list-group-item">Boosters : {boosters}</ListItem>
        </ul>
        <div class="card-body">
          <a
            href={wikipedia}
            target="_blank"
            class="card-link"
            rel="noreferrer"
          >
            Wiki Page
          </a>
        </div>
        <div class="card-footer text-muted">
          <a href={wikipedia}>More Info</a>
        </div>
      </InfoContainer>
    </CardContainer>
  );
};

export default ImageCard;
