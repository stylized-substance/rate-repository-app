import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
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
});

const RepositoryItem = ({ item }) => {
  const roundToThousand = (number) => {
    return number >= 1000 ? Math.round(number / 100) / 10 + "k" : number;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container.flexRow}>
        <Image src={item.ownerAvatarUrl} style={styles.tinyLogo} />
        <View style={styles.container.flexColumn}>
          <Text fontSize="itemFullName" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text fontSize="itemDescription">{item.description}</Text>
          <View style={styles.languageBadge}>
            <Text color="textItemLanguage">{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container.flexRow}>
        <View style={styles.container.flexColumn}>
          <Text fontWeight="bold">{roundToThousand(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.container.flexColumn}>
          <Text fontWeight="bold">{roundToThousand(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.container.flexColumn}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
        <View style={styles.container.flexColumn}>
          <Text fontWeight="bold">{roundToThousand(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
