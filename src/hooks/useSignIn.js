import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useContext } from "react";
import LoggedInUserContext from "../contexts/LoggedInUserContext";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const user = useContext(LoggedInUserContext);

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async (credentials) => {
    const mutation = await mutate({ variables: { credentials } });
    await authStorage.setAccessToken(mutation.data.authenticate);
    await apolloClient.resetStore();
    user.setLoggedInUser(credentials.username);
    navigate("/");

    return mutation;
  };

  return [signIn, result];
};

export default useSignIn;
