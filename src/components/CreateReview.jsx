import { TextInput, Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useCreateReview from '../hooks/useCreateReview'

const CreateReviewContainer = ({ onSubmit }) => {
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
    ownerName: yup.string().required("Repository owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup.number()
      .required("Rating is required")
      .min(0, "Rating must be between 0 and 10")
      .max(10, "Rating must be between 0 and 10"),
    text: yup.string("Review must be a text string")
  });

  const formik = useFormik({
    initialValues: {
      repositoryName: "formik",
      ownerName: "jaredpalmer",
      rating: "10",
      text: "asd"
    },
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={formik.errors.ownerName ? styles.error : styles.textInput}
          placeholder="Repository owner name"
          value={formik.values.ownerName}
          onChangeText={formik.handleChange("ownerName")}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <Text color="error" fontSize="subheading">
            {formik.errors.ownerName}
          </Text>
        )}
        <TextInput
          style={formik.errors.repositoryName ? styles.error : styles.textInput}
          placeholder="Repository name"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange("repositoryName")}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text color="error" fontSize="subheading">
            {formik.errors.repositoryName}
          </Text>
        )}
        <TextInput
          style={formik.errors.rating ? styles.error : styles.textInput}
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange("rating")}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text color="error" fontSize="subheading">
            {formik.errors.rating}
          </Text>
        )}
        <TextInput
          style={formik.errors.text ? styles.error : styles.textInput}
          placeholder="Review"
          value={formik.values.text}
          onChangeText={formik.handleChange("text")}
          multiline
        />
        {formik.touched.text && formik.errors.text && (
          <Text color="error" fontSize="subheading">
            {formik.errors.text}
          </Text>
        )}
        <Pressable onPress={formik.handleSubmit}>
          <View style={styles.submitButton}>
            <Text fontSize="buttonText" color="textItemLanguage">
              Create a review
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const CreateReview = () => {
  const [ createReview, result ] = useCreateReview()

  const onSubmit = async (review) => {
    try {
      console.log('create')
      const res = await createReview(review)
      console.log(res)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
