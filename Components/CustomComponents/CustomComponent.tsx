import React from "react";
import { View, Text, TextInput } from "react-native";

const Home: React.FC = () => {
  return (
    <View>
      <Text>Hello, I'm ....</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
        }}
        defaultValue="Name me!"
      ></TextInput>
    </View>
  );
};

export default Home;
