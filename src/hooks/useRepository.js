import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId },
  });

  const singleRepository = data === undefined ? null : data.repository;

  return { singleRepository, loading };
};

export default useRepository;
