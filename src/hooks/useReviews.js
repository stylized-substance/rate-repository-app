import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (repositoryId) => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId },
  });

  const reviews = data === undefined ? null : data.repository.reviews.edges;

  return { reviews, loading };
};

export default useReviews;
