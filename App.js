import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  function addToList() {
    setGoalList((currGoalList) => [...currGoalList, goal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add Goal" onPress={addToList} />
      </View>
      <View>
        {goalList.map((thisgoal) => (
          <Text>{thisgoal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
