import { useMutation } from "@apollo/client";
import { CREATEREVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);

  const createReview = async (review) => {
    const mutation = await mutate({ variables: { review } });
    return mutation;
  };

  return [createReview, result];
};

export default useCreateReview;
