import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Test from "./assets/Test";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World !!!</Text>
      <Button
        color="white"
        title="Check Request(s)"
        onPress={() => {
          Alert.alert("Friend Request", "You have a new friend request", [
            { text: "Accept", onPress: () => Alert.alert("Request Accepted") },
            { text: "Reject", onPress: () => Alert.alert("Request Rejected") },
            { text: "Cancel" },
          ]);
        }}
      />
      <Button
        color="white"
        title="Enter Your Age"
        onPress={() => {
          Alert.prompt("Your Age", "Please Enter your Age here", (text) =>
            alert("Your Age is " + text)
          );
        }}
      />
      <ScrollView>
        <Test />
      </ScrollView>
      <Image source={require("./assets/favicon.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    textDecorationColor: "#fff",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
