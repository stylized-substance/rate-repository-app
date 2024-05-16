import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATEREVIEW = gql`
  mutation CreateReview($reviewWithIntRating: CreateReviewInput) {
    createReview(review: $reviewWithIntRating) {
      repositoryId
    }
  }
`