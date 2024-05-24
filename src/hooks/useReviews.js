import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (repositoryId, after) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: repositoryId,
      first: 3,
      after: after
    },
  });

  //console.log({...result.variables})
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    console.log({canFetchMore})
    console.log('endcursor', data?.repository.reviews.pageInfo.endCursor)
    
    if (!canFetchMore) {
      return;
    }
    console.log('fetchMore')
    
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      }
    });
  };

  const reviews = data === undefined ? null : data.repository.reviews.edges;

  return { reviews, fetchMore: handleFetchMore, loading, ...result };
};

export default useReviews;
