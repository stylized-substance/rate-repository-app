import { View, StyleSheet, Pressable,Alert } from "react-native";
import Text from "./Text";
import theme from "./theme";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

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
    buttons: {
      flexDirection: "row",
      gap: 15,
      alignSelf: "center",
    }
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
  button: {
    paddingTop: 10,
  },
  buttonText: {
    padding: 10
  },
  viewRepositoryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    alignItems: "center",
    padding: 5,
  },
  deleteReviewButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 3,
    alignItems: "center",
    padding: 5,
  },
});

const ReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate();
  const [ deleteReview ] = useDeleteReview()
  const repositoryId = review.repositoryId;
  const reviewId = review.id

  const onDelete = () => {
    deleteReview(reviewId)
  };

  const alert = () => {
    Alert.alert('Delete review', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => onDelete(),
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.container.flexRow}>
        <View style={styles.reviewScore}>
          <Text fontSize="heading" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.container.flexColumn}>
          {review.user && (
            <Text fontWeight="bold" fontSize="itemFullName">
              {review.user.username}
            </Text>
          )}
          <Text fontSize="itemDescription">
            {format(format(review.createdAt, "yyyy-MM-dd"), "dd.MM.yyyy")}
          </Text>
          {!review.user && (
            <Text fontWeight="bold" fontSize="itemFullName">
              {review.repository.fullName}
            </Text>
          )}
          <Text fontSize="itemDescription">{review.text}</Text>
        </View>
      </View>
      {!review.user && (
        <View style={styles.container.buttons}>
          <Pressable
            onPress={() => navigate(`/${repositoryId}`)}
            style={styles.button}
          >
            <View style={styles.viewRepositoryButton}>
              <Text fontSize="buttonText" color="textItemLanguage" style={styles.buttonText}>
                View repository
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={alert} style={styles.button}>
            <View style={styles.deleteReviewButton}>
              <Text fontSize="buttonText" color="textItemLanguage" style={styles.buttonText}>
                Delete review
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
