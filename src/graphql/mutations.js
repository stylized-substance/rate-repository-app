import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATEUSER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      username
    }
  }`

export const CREATEREVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;
