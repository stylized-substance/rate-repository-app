import { useMutation } from "@apollo/client";
import { CREATEUSER } from "../graphql/mutations";

const useSignup = () => {
  const [mutate, result] = useMutation(CREATEUSER);

  const signup = async (user) => {
    const mutation = await mutate({ variables: { user } });
    return mutation;
  };

  return [signup, result];
};

export default useSignup;
