import { FlatList, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";

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
  const [order, setOrder] = useState('{"sortBy": "CREATED_AT", "direction": "DESC"}');
  const { repositories } = useRepositories(JSON.parse(order));
  console.log(JSON.parse(order))
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
      >
        <Picker.Item label="Latest repositories" value={'{"sortBy": "CREATED_AT", "direction": "DESC"}'} />
        <Picker.Item label="Highest rated repositories" value={'{"sortBy": "RATING_AVERAGE", "direction": "DESC"}'} />
        <Picker.Item label="Lowest rated repositories" value={'{"sortBy": "RATING_AVERAGE", "direction": "ASC"}'} />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </View>
  );
};

export default RepositoryList;
export { RepositoryListContainer };
