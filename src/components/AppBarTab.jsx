import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text }) => {
  return (
    <Pressable
      onPress={() => {
        console.log("press");
      }}
      android_ripple={{ color: "#00ffff" }}
    >
      <Text fontSize="heading" color="textAppBar">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
