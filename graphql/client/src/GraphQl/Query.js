import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query  {
    getCountry {
      id
      name
      population
      land_area
      density
      capital
      currency
      flag
    }
  }
`;

