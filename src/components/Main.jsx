import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import RepositoryItem from "./RepositoryItem";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import theme from "./theme";
import { Route, Routes, Navigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundMainComponent,
    flexGrow: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:id" element={<RepositoryItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
