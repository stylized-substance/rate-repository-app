import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (order, searchKeyword, after) => {
  const { sortBy, direction } = order;

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: sortBy,
      orderDirection: direction,
      searchKeyword: searchKeyword,
      first: 4,
      after: after,
    },
  });
  console.log()

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    console.log("endCursor", data.repositories.pageInfo.endCursor);

    const res = fetchMore();
    console.log('res', res)
  };

  if (loading) {
    console.log("loading");
    return "Loading..";
  }

  const repositories = data === undefined ? [] : data.repositories;

  return {
    repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
