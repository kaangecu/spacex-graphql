import React from "react";
import { useQuery, gql } from "@apollo/client";
import ImageCard from "../../components/ImageCard";
import { Container } from "./styles.js";

const RocketsPage = () => {
  const { data } = useQuery(Rockets);

  return (
    <Container>
      {data?.rockets?.map((rocketData) => (
        <ImageCard data={rocketData} />
      ))}
    </Container>
  );
};

const Rockets = gql`
  query GetRockets {
    rockets {
      name
      success_rate_pct
      wikipedia
      active
      boosters
      company
      cost_per_launch
      country
      description
      description
      diameter {
        meters
      }
      first_flight
      height {
        meters
      }
      mass {
        kg
      }
      payload_weights {
        id
        kg
        name
      }
    }
  }
`;

export default RocketsPage;
