import { useMutation } from "@apollo/client";
import { CREATEREVIEW } from '../graphql/mutations'

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);

  const createReview = async (review) => {
    const rating = parseInt(review.rating)
    const reviewWithIntRating = {
      rating: rating,
      ...review
    }
    console.log(typeof rating)
    console.log({reviewWithIntRating})
    const mutation = await mutate({ variables: { reviewWithIntRating } });
    console.log(mutation)
    return mutation;
  };

  return [createReview, result];
};

export default useCreateReview;
