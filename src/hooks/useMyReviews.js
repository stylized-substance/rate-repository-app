import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReviews = () => {
  const { data, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });

  const reviews = data === undefined ? null : data.me.reviews;

  return { reviews, loading };
};

export default useMyReviews;
