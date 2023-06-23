import React from "react";
import { View, Text } from "react-native";

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string
): string => {
  return firstName + " " + secondName + " " + thirdName;
};
const Boss: React.FC = () => {
  return (
    <View>
      <Text>Hello, I'm a {getFullName("Rum", "Tum", "Tuggle")}</Text>
    </View>
  );
};

export default Boss;
