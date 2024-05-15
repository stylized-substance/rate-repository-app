import { View, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "./Text";
import theme from "./theme";
import { useNavigate, useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import { useState, useEffect } from "react";
import * as Linking from "expo-linking";
import { FlatList } from "react-native";
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
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  logo: {
    width: 75,
    height: 75,
  },
  languageBadge: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    alignSelf: "flex-start",
    padding: 4,
    textColor: theme.colors.primary,
  },
  linkButton: {
    paddingTop: 10,
  },
  linkButtonText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    alignItems: "center",
    padding: 5,
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
  separator: {
    height: 10,
  },
});

const ReviewItem = ({ review }) => {
  console.log("review", review);
  return (
    <View style={styles.container}>
      <View style={styles.container.flexRow}>
        <View style={styles.container.flexRow}>
          <View style={styles.reviewScore}>
            <Text fontSize="heading" color="primary">
              {review.rating}
            </Text>
          </View>
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
const Reviews = () => {
  const { reviews, loading } = useReviews(useParams().id);
  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={<View style={styles.separator} />}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
    />
  );
};

const RepositoryItem = ({ item }) => {
  const repositoryId = useParams().id;
  const navigate = useNavigate();
  const [itemToRender, setItemToRender] = useState(null);
  const { singleRepository, loading } = useRepository(repositoryId);

  useEffect(() => {
    if (item) {
      setItemToRender(item);
    } else {
      if (singleRepository && !loading) {
        setItemToRender(singleRepository);
      }
    }
  }, [loading]);

  if (!itemToRender) {
    return null;
  }

  const navigateToRepo = () => {
    navigate(`/${itemToRender.id}`);
  };

  const openLink = (url) => {
    Linking.openURL(`${url}`);
  };

  const roundToThousand = (number) => {
    return number >= 1000 ? Math.round(number / 100) / 10 + "k" : number;
  };

  return (
    <View style={styles.container} testID="repositoryItem">
      <Pressable onPress={navigateToRepo}>
        <View style={styles.container.flexRow}>
          <Image src={itemToRender.ownerAvatarUrl} style={styles.tinyLogo} />
          <View style={styles.container.flexColumn}>
            <Text fontSize="itemFullName" fontWeight="bold">
              {itemToRender.fullName}
            </Text>
            <Text fontSize="itemDescription">{itemToRender.description}</Text>
            <View style={styles.languageBadge}>
              <Text color="textItemLanguage">{itemToRender.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container.flexRow}>
          <View style={styles.container.flexColumn}>
            <Text fontWeight="bold">
              {roundToThousand(itemToRender.forksCount)}
            </Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.container.flexColumn}>
            <Text fontWeight="bold">
              {roundToThousand(itemToRender.stargazersCount)}
            </Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.container.flexColumn}>
            <Text fontWeight="bold">{itemToRender.ratingAverage}</Text>
            <Text>Rating</Text>
          </View>
          <View style={styles.container.flexColumn}>
            <Text fontWeight="bold">
              {roundToThousand(itemToRender.reviewCount)}
            </Text>
            <Text>Reviews</Text>
          </View>
        </View>
        {repositoryId && (
          <View style={styles.container.flexColumn}>
            <Pressable
              onPress={() => openLink(itemToRender.url)}
              style={styles.linkButton}
            >
              <View style={styles.linkButtonText}>
                <Text fontSize="buttonText" color="textItemLanguage">
                  Open in GitHub
                </Text>
              </View>
            </Pressable>
            <Reviews />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default RepositoryItem;
