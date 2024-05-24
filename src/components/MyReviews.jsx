import { FlatList, View, StyleSheet } from "react-native";
import useMyReviews from "../hooks/useMyReviews";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { reviews, refetch } = useMyReviews();
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} />}
    />
  );
};

export default MyReviews;
