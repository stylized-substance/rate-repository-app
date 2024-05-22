import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
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
  query me($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            text
            createdAt
            rating
            repositoryId
            id
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`;
