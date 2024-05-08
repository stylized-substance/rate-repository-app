import { useContext } from "react";
import LoggedInUserContext from "../contexts/LoggedInUserContext";

const useLoggedInUser = () => {
  return useContext(LoggedInUserContext);
};

export default useLoggedInUser;
