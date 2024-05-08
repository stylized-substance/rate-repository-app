import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "./theme";
import useLoggedInUser from "../hooks/useLoggedInUser.js";

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
  const user = useLoggedInUser();
  const onPress = () => {
    user.logout();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.appBarTab}>
          <AppBarTab text="Repositories" type="link" linkTo="/" />
        </View>
        <View style={styles.appBarTab}>
          {user.loggedInUser && <AppBarTab text="Sign out" onPress={onPress} />}
          {!user.loggedInUser && (
            <AppBarTab text="Sign in" type="link" linkTo="signin" />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
