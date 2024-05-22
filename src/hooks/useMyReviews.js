import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReviews = () => {
  const { data, loading, refetch } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });
  const reviews = data === undefined || !data.me ? null : data.me.reviews;

  return { reviews, loading, refetch };
};

export default useMyReviews;
