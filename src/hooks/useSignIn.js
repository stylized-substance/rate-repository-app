import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = ({ credentials }) => {
  const [authenticate, { data }] = useMutation(AUTHENTICATE)
  authenticate({ variables: { credentials: credentials } })
  //console.log(data)
}

export default useSignIn