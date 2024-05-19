import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, orderDirection) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {orderBy: orderBy, orderDirection: orderDirection}
  });
  if (loading) {
    console.log('loading')
    return "Loading.."
  }
  const repositories = data === undefined ? [] : data;

  return repositories;
};

export default useRepositories;
