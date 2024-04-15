import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.colors.backgroundAppBar,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    //alignItems: "center",
    //justifyContent: "center"
  },
  appBarTab: {
    //gap: 20
  }
  });

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.appBarTab}>
          <AppBarTab text="Repositories" linkTo="/" style={styles.appBarTab}/>
        </View>
        <View style={styles.appBarTab}>
          <AppBarTab text="Sign in" linkTo="signin" style={styles.appBarTab}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
