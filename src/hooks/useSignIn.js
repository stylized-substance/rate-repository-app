import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async (credentials) => {
    const mutation = await mutate({ variables: { credentials } });
    await authStorage.setAccessToken(mutation.data.authenticate);
    await apolloClient.resetStore();

    return mutation;
  };

  return [signIn, result];
};

export default useSignIn;
