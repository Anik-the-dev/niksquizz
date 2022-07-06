import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import React from "react";
import home from '../images/home.png'

export default function Home() {
  // random name generator............
  const names = ["Anik", "Joffer", "Moyank", "Charlee", "Premo", "Levos", "Thrive"];
  const getRandom = () => {
    const a = names[Math.floor(Math.random() * names.length)];
    return a;
  };
  const name = getRandom()
  return (
    <View style={styles.container}>
      <Image style={styles.imageDimentions} source={home}></Image>
      <TouchableOpacity
        style={{backgroundColor:"#3d3d3d", borderRadius:50}}
        onPress={()=>{}}
      >
          <Text style={{color:"#fff", fontWeight:'600', fontSize:18, padding:16}}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",    
    alignItems: "center",
    backgroundColor:"#0c6291"
  },
  imageDimentions:{
    marginVertical:50,
    width:"80%",
    height:"40%"
  }
});
