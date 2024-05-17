import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

const RepositoryList = () => {
  const { repositoriesLatest } = useRepositories('CREATED_AT', 'DESC');
  //const { repositoriesHighestRated } = useRepositories('RATING_AVERAGE', 'DESC');
  //const { repositoriesLowestRated } = useRepositories('RATING_AVERAGE', 'ASC');


  return <RepositoryListContainer repositories={repositoriesLatest} />;
};

export default RepositoryList;
export { RepositoryListContainer };
