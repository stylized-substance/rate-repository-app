import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import LoggedInUserContext from "./src/contexts/LoggedInUserContext";
import { useState, useEffect } from "react";
import { ME } from "./src/graphql/queries";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const queryMe = async () => {
      const res = await apolloClient.query({
        query: ME,
      });
      if (res.data.me) {
        setLoggedInUser(res.data.me.username);
      }
    };

    queryMe();
  }, []);

  const logout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    setLoggedInUser(null);
  };

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <LoggedInUserContext.Provider
            value={{ loggedInUser, setLoggedInUser, logout }}
          >
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </LoggedInUserContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
