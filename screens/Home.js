import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  const names = ["Anik", "Joffer", "Moyank", "Charlee", "Premo", "Levos"];
  const getRandom = () => {
    const a = names[Math.floor(Math.random() * names.length)];
    return a;
  };
  const name = getRandom()
  console.log(getRandom());
  return (
    <View>
      <Text>Home Anik Bhai {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
