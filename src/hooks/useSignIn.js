import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async (credentials) => {
    mutate(credentials)
  }

  return [signIn, result]
}

export default useSignIn