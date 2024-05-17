import theme from "./theme";
import Text from "./Text";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import useSignup from "../hooks/useSignup";

const SignupContainer = ({ onSubmit, errorMessage }) => {
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
    error: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: theme.colors.textError,
      padding: 10,
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 3,
      alignItems: "center",
      padding: 10,
    },
  });

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "User name length must be at least 5 characters")
      .max(30, "User name length must be at most 30 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password length must be at least 5 characters")
      .max(30, "Password length must be at most 30 characters")
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "aaaaa",
      password: "aaaaa",
      passwordConfirm: "aaaaa",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={formik.errors.username ? styles.error : styles.textInput}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="error" fontSize="subheading">
            {formik.errors.username}
          </Text>
        )}
        <TextInput
          style={formik.errors.password ? styles.error : styles.textInput}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="error" fontSize="subheading">
            {formik.errors.password}
          </Text>
        )}
        <TextInput
          style={
            formik.errors.passwordConfirm ? styles.error : styles.textInput
          }
          placeholder="Password confirmation"
          value={formik.values.passwordConfirm}
          onChangeText={formik.handleChange("passwordConfirm")}
          secureTextEntry
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <Text color="error" fontSize="subheading">
            {formik.errors.passwordConfirm}
          </Text>
        )}
        {errorMessage && (
          <Text color="error" fontSize="subheading">
            {errorMessage}
          </Text>
        )}
        <Pressable onPress={formik.handleSubmit}>
          <View style={styles.submitButton}>
            <Text fontSize="buttonText" color="textItemLanguage">
              Sign up
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const Signup = () => {
  const [ signIn ] = useSignIn();
  const [ signup ] = useSignup();
  const [ errorMessage, setErrorMessage ] = useState()

  const onSubmit = async (values) => {
    try {
      const user = {
        username: values.username,
        password: values.password
      }
      await signup(user);
      signIn(user)
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage(String(error))
    }
  };

  return <SignupContainer onSubmit={onSubmit} errorMessage={errorMessage} />;
};

export default Signup;
