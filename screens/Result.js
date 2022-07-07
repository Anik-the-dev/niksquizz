import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Result({ navigation, route }) {
  const { score,userRandomName } = route.params;
  return (
    <View style={styles.container}> 
      <Text style={styles.mainText}>Hello Mr. {userRandomName}: You have scored: {score} out of 10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent:"center",
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
      fontSize: 28,
      fontWeight: "600",
      marginTop: 22,
      marginHorizontal:16
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
  
