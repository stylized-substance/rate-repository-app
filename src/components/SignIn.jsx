import theme from "./theme";
import Text from "./Text";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    padding: 20,
    backgroundColor: theme.colors.backgroundContainer,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    alignItems: "center",
    padding: 10,
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "Username",
      password: "Password",
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeHolder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />
        <TextInput
          style={styles.textInput}
          placeHolder="password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry
        />
        <Pressable onPress={formik.handleSubmit}>
          <View style={styles.submitButton}>
            <Text fontSize="buttonText" color="textItemLanguage">
              Sign in
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default SignIn;
