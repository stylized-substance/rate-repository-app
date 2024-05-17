import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query ($orderBy, $orderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
          url
          id
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
      id
    }
  }
`;

export const GET_REVIEWS = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      reviews {
        edges {
          node {
            id
            userId
            repositoryId
            rating
            createdAt
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`;
