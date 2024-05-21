import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order, searchKeyword) => {
  const { sortBy, direction } = order;

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: sortBy,
      orderDirection: direction,
      searchKeyword: searchKeyword,
    },
  });
  if (loading) {
    console.log("loading");
    return "Loading..";
  }
  const repositories = data === undefined ? [] : data;
  return repositories;
};

export default useRepositories;
