import React from "react";
import { View, Text, Button } from "react-native";
interface NewCatProps {
  name: string;
  isHungry: boolean;
  handleisHungry: VoidFunction;
  handleUnDisable: VoidFunction;
}
const NewCat: React.FC<NewCatProps> = ({
  name,
  isHungry,
  handleisHungry,
  handleUnDisable,
}) => {
  return (
    <View>
      <Text>I'm a {name} and I'm hungry!</Text>
      <Button
        onPress={handleisHungry}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <View style={{ marginTop: 10 }}>
        <Button onPress={handleUnDisable} title="Clear" color={"red"} />
      </View>
    </View>
  );
};

export default NewCat;
