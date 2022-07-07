import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import home from "../images/home.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation, route }) {
  const { pname } = route.params;
  const [userRandomName, setUserRandomName] = useState("");

  // set the data to asyncStorage
  const setUserName = async (pname) => {
    try {
      await AsyncStorage.setItem("@userName", pname);
      await getUserName();
      navigation.navigate("Quiz");
    } catch (e) {
      console.log("Asyncstorage error", e);
    }
  };

  // get async Storage Data............
  const getUserName = async () => {
    const getName = await AsyncStorage.getItem("@userName");
    if (getName !== null) {
      setUserRandomName(getName);
      console.log("randomnamego", getName);
    }
  };

  console.log("randomname", userRandomName);
  return (
    <View style={styles.container}>
      <Image style={styles.imageDimentions} source={home}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome Mr. {pname} to niksquiz</Text>
        <Text style={styles.secondaryText}>
          Don't let your Sun Set till your last breadth. Try these quiz to
          measure your capabilities.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>setUserName(pname)}>
        <Text
          style={{
            color: "#3d3d3d",
            fontWeight: "700",
            fontSize: 16,
            padding: 16,
            textAlign: "center",
          }}
        >
          Start Quiz Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0c6291",
  },
  imageDimentions: {
    marginTop: 70,
    width: "80%",
    height: "40%",
  },
  textContainer: {
    paddingHorizontal: 23,
  },
  mainText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 22,
  },
  secondaryText: {
    color: "#FFD764",
    marginBottom: 56,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#FFD764",
    borderRadius: 50,
    width: "70%",
    marginVertical: "10%",
  },
});
