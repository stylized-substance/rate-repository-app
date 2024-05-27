import { View, FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: theme.colors.backgroundContainer,
    flexRow: {
      flexDirection: "row",
      gap: 15,
      alignContent: "flex-start",
    },
    flexColumn: {
      flexDirection: "column",
      gap: 5,
      flexShrink: 1,
    },
  },
  separator: {
    height: 10,
  },
});

const SingleRepositoryView = () => {
  const repositoryId = useParams().id;
  const { singleRepository } = useRepository(repositoryId);
  const { reviews, fetchMore } = useReviews(repositoryId);

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 100 }}
      data={reviews}
      ItemSeparatorComponent={<ItemSeparator style={styles.separator} />}
      keyExtractor={(item) => item.node.id}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ListHeaderComponent={
        <RepositoryItem item={singleRepository} inSingleRepoView={true} />
      }
      ListFooterComponent={<ItemSeparator style={styles.separator} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepositoryView;
