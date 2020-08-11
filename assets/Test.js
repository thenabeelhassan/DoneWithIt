import React from "react";
import {
  StyleSheet,
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
      <View
        style={{
          paddingTop: 20,
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
