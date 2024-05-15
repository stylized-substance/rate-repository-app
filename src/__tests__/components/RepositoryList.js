import { render, screen } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
  },
  edges: [
    {
      node: {
        id: "jaredpalmer.formik",
        fullName: "jaredpalmer/formik",
        description: "Build forms in React, without the tears",
        language: "TypeScript",
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
      },
      cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
    },
    {
      node: {
        id: "async-library.react-async",
        fullName: "async-library/react-async",
        description: "Flexible promise-based React data loader",
        language: "JavaScript",
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/54310907?v=4",
      },
      cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
    },
  ],
};

const roundToThousand = (number) => {
  return number >= 1000 ? Math.round(number / 100) / 10 + "k" : number;
};

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId("repositoryItem");

      repositoryItems.forEach((item, index) => {
        expect(item).toHaveTextContent(repositories.edges[index].node.fullName); // Check that repository name renders correctly
        expect(item).toHaveTextContent(
          repositories.edges[index].node.description,
        ); // Check that repository description renders correctly
        expect(item).toHaveTextContent(repositories.edges[index].node.language); // Check that repository language renders correctly
        expect(item).toHaveTextContent(
          roundToThousand(repositories.edges[index].node.forksCount),
        ); // Check that repository forks count renders correctly
        expect(item).toHaveTextContent(
          roundToThousand(repositories.edges[index].node.stargazersCount),
        ); // Check that repository stargazers count renders correctly
        expect(item).toHaveTextContent(
          roundToThousand(repositories.edges[index].node.ratingAverage),
        ); // Check that repository rating average renders correctly
        expect(item).toHaveTextContent(
          roundToThousand(repositories.edges[index].node.reviewCount),
        ); // Check that repository review count renders correctly
      });
    });
  });
});
