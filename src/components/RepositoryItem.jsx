import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    //alignSelf: "flex-start",
    paddingTop: 50,
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
    textColor: theme.colors.textSecondary
  }
});

const RepositoryItem = ({ item }) => {
  const roundToThousand = (number) => {
    return number >= 1000 ? Math.round(number / 100) / 10 + "k" : number;
  };

  return (
    <View style={styles.container}>
      <Image src={item.ownerAvatarUrl} style={styles.tinyLogo} />
      <Text fontSize="itemFullName" fontWeight="bold">{item.fullName}</Text>
      <Text fontSize="itemDescription">{item.description}</Text>
      <View style={styles.languageBadge}>
        <Text color="textItemLanguage">{item.language}</Text>
      </View>
      <Text fontWeight="bold">{roundToThousand(item.forksCount)}</Text>
      <Text>Forks</Text>
      <Text fontWeight="bold">{roundToThousand(item.stargazersCount)}</Text>
      <Text>Stars</Text>
      <Text fontWeight="bold">{item.ratingAverage}</Text>
      <Text>Rating</Text>
      <Text fontWeight="bold">{roundToThousand(item.reviewCount)}</Text>
      <Text>Reviews</Text>
    </View>
  );
};

export default RepositoryItem;
