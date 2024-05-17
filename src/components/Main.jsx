import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import SingleRepositoryView from "./SingleRepositoryView";
import CreateReview from "./CreateReview";
import theme from "./theme";
import { Route, Routes, Navigate } from "react-router-native";
import Signup from "./Signup";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/:id" element={<SingleRepositoryView />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
