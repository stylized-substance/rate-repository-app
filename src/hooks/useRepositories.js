import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, orderDirection) => {
  console.log(orderBy, orderDirection)
  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {orderBy: orderBy, orderDirection: orderDirection}
  });

  const repositories = data === undefined ? [] : data;

  return repositories;
};

export default useRepositories;
