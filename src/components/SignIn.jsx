import theme from "./theme";
import Text from "./Text";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const SignIn = () => {
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
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  
  const [signIn] = useSignIn()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      const { data } = await signIn(values)
      data.authenticate.accessToken && navigate('/')
    } catch (error) {
      console.log('Error:', error)
    }
  };
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={formik.errors.username ? styles.error : styles.textInput}
          placeHolder="Username"
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
          placeHolder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="error" fontSize="subheading">
            {formik.errors.password}
          </Text>
        )}
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
