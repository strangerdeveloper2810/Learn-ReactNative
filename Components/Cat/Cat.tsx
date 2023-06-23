import React from "react";
import { View, Text } from "react-native";
interface CatProps {
  name: string;
  age: number;
}
const Cat: React.FC<CatProps> = ({ name, age }) => {
  return (
    <View>
      <Text>
        Hello Boss, I'm your {name} and {age} olds
      </Text>
    </View>
  );
};

export default Cat;
