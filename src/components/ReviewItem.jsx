import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";
import { format } from "date-fns";

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
  reviewScore: {
    alignItems: "center",
    borderWidth: 3,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: theme.colors.primary,
    padding: 7,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container.flexRow}>
        <View style={styles.reviewScore}>
          <Text fontSize="heading" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.container.flexColumn}>
          <Text fontWeight="bold" fontSize="itemFullName">
            {review.user.username}
          </Text>
          <Text fontSize="itemDescription">
            {format(format(review.createdAt, "yyyy-MM-dd"), "dd.MM.yyyy")}
          </Text>
          <Text fontSize="itemDescription">{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
