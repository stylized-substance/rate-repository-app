import { Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ type, text, linkTo, onPress }) => {
  return type === "link" ? (
    <Link to={linkTo}>
      <Text fontSize="appBarTab" color="textAppBar">
        {text}
      </Text>
    </Link>
  ) : (
    <Link to={linkTo}>
      <Pressable onPress={onPress}>
        <Text fontSize="appBarTab" color="textAppBar">
          {text}
        </Text>
      </Pressable>
    </Link>
  );
};

export default AppBarTab;
