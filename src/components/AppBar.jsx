import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.colors.backgroundAppBar,
  },
  appBarTab: {
    paddingHorizontal: 5,
  },
  });

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.appBarTab}>
          <AppBarTab text="Repositories" linkTo="/" />
        </View>
        <View style={styles.appBarTab}>
          <AppBarTab text="Sign in" linkTo="signin" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
