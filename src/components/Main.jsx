import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backGroundMainComponent,
    /*     display: "flex",
    flexDirection: "column",
    gap: 10,
    flexGrow: 1,
    flexShrink: 1,
  */  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      {/* <RepositoryList /> */}
    </View>
  );
};

export default Main;
