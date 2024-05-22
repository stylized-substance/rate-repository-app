import { useMutation } from "@apollo/client";
import { DELETEREVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW);

  const deleteReview = async (reviewId) => {
    const mutation = await mutate({ variables: { deleteReviewId: reviewId } });
    return mutation;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
