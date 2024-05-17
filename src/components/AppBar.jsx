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
    flex: 1,
    flexGrow: 1,
    gap: 20,
    justifyContent: "center",
  },
});

const AppBar = () => {
  const user = useLoggedInUser();
  const onPress = () => {
    user.logout();
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.appBarTab}>
          <AppBarTab text="Repositories" type="link" linkTo="/" />
          {user.loggedInUser && (
            <AppBarTab text="Create a review" type="link" linkTo="review" />
          )}
          {user.loggedInUser && <AppBarTab text="Sign out" onPress={onPress} />}
          {!user.loggedInUser && (
            <AppBarTab text="Sign in" type="link" linkTo="signin" />
          )}
          {!user.loggedInUser && (
            <AppBarTab text="Sign up" type="link" linkTo="signup" />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default AppBar;
