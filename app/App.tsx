import React from "react";
import { Button, ScrollView } from "react-native";
import NewCat from "../Components/NewCat";

const App: React.FC = () => {
  const [isHungry, setIsHungry] = React.useState<boolean>(true);
  const handleisHungry = React.useCallback(() => {
    setIsHungry(false);
  }, [isHungry]);
  const handleUnDisable = React.useCallback(() => {
    setIsHungry(true);
  }, [isHungry]);
  return (
    <ScrollView>
      {/* <Text>Some Text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        ></Image>
      </View> */}
      <NewCat
        name="Munkustrap"
        isHungry={isHungry}
        handleisHungry={handleisHungry}
        handleUnDisable={handleUnDisable}
      />
    </ScrollView>
  );
};

export default App;
