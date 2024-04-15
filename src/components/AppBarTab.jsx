import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Text fontSize="appBarTab" color="textAppBar">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
