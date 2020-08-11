import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  StatusBar,
} from "react-native";

export default function Test() {
  return (
    <SafeAreaView style={styles.container}>
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
      <Image source={require("./assets/favicon.png")} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            alert("Image Clicked");
          }}
        >
          <Image
            source={{
              width: 100,
              height: 150,
              uri: "https://picsum.photos/200/300?random=1",
            }}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity>
          <Image
            source={{
              width: 100,
              height: 150,
              uri: "https://picsum.photos/200/300?random=2",
            }}
          />
        </TouchableOpacity>
        <TouchableHighlight onPress={() => console.log("Tapped")}>
          <Image
            source={{
              width: 100,
              height: 150,
              uri: "https://picsum.photos/200/300?random=3",
            }}
          />
        </TouchableHighlight>
      </View>
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
