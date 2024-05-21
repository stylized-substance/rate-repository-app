import { FlatList, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import React from "react";
import { TextInput } from "react-native";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  separator: {
    height: 10,
  },
  searchInput: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  picker: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const PickerComponent = ({ order, setOrder }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={order}
      onValueChange={(itemValue) => setOrder(itemValue)}
    >
      <Picker.Item
        label="Latest repositories"
        value={'{"sortBy": "CREATED_AT", "direction": "DESC"}'}
      />
      <Picker.Item
        label="Highest rated repositories"
        value={'{"sortBy": "RATING_AVERAGE", "direction": "DESC"}'}
      />
      <Picker.Item
        label="Lowest rated repositories"
        value={'{"sortBy": "RATING_AVERAGE", "direction": "ASC"}'}
      />
    </Picker>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return (
      <>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={this.props.searchText}
          onChangeText={this.props.onChangeSearchText}
        />
        <PickerComponent
          order={this.props.order}
          setOrder={this.props.setOrder}
        />
      </>
    );
  };

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState(
    '{"sortBy": "CREATED_AT", "direction": "DESC"}',
  );
  const [searchText, setSearchText] = useState();
  const [delayedText] = useDebounce(searchText, 500);

  const { repositories } = useRepositories(JSON.parse(order), delayedText);

  const onChangeSearchText = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <RepositoryListContainer
        repositories={repositories}
        itemSeparator={ItemSeparator}
        RepositoryItem={RepositoryItem}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
        order={order}
        setOrder={setOrder}
      />
    </View>
  );
};

export default RepositoryList;
