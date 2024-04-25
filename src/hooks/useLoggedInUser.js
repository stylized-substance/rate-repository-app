import useAuthStorage from "./useAuthStorage";
import { ME } from '../graphql/queries'
import { useQuery } from '@apollo/client';

const useLoggedInUser = () => {
  const authStorage = useAuthStorage();
  
  const getToken = async () => {
    const result = await authStorage().getAccessToken()
    //console.log(result.accessToken)
    return result
    //console.log(await useAuthStorage().getAccessToken())
    //return await useAuthStorage().getAccessToken()
  }

  const getUser = () => {
    const { data } = useQuery(ME, {
      fetchPolicy: 'cache-and-network'
    })

    return data
  }

  return [getToken, getUser]
}

export default useLoggedInUser