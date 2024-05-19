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

  console.log("repositories", repositoryNodes);

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

const PickerComponent = ({
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
}) => {
  return (
    <Picker
      selectedValue={orderDirection}
      onValueChange={(itemValue, itemIndex) => setOrderDirection(itemValue)}
    >
      <Picker.item label="Ascending" value="ASC" />
      {/* <Picker.item label="Descending" value="DESC" /> */}
    </Picker>
    //null
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("ASC");

  const { repositories } = useRepositories(orderBy, orderDirection);
  console.log("repositories", repositories);

  return (
    <View style={styles.container}>
      {/* <PickerComponent
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        orderDirection={orderDirection}
        setOrderDirection={setOrderDirection}
      /> */}
    <Picker
      selectedValue={orderDirection}
      onValueChange={(itemValue, itemIndex) => setOrderDirection(itemValue)}
    >
      <Picker.item label="Ascending" value="ASC" />
      {/* <Picker.item label="Descending" value="DESC" /> */}
    </Picker>
    <RepositoryListContainer repositories={repositories} />;
    </View>
  );
};

export default RepositoryList;
export { RepositoryListContainer };
