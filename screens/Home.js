import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import React from "react";
import home from '../images/home.png'

export default function Home({navigation}) {
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
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome Mr. {name} to niksquiz</Text>
        <Text style={styles.secondaryText}>Don't let your Sun Set till your last breadth. Try these quiz to measure your capabilities.</Text>

      </View>
      <TouchableOpacity
        style={{backgroundColor:"#FFD764", borderRadius:50,  width:'80%', marginVertical:'10%'}}
        onPress={()=>{navigation.navigate("Quiz")}}
      >
          <Text style={{color:"#3d3d3d", fontWeight:'700', fontSize:16, padding:16, textAlign:"center"}}>Start Quiz Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,   
    alignItems: "center",
    backgroundColor:"#0c6291"
  },
  imageDimentions:{
    marginTop:70,
    width:"80%",
    height:"40%"
  },
textContainer:{
  paddingHorizontal:23
},
mainText:{
  color:"#fff",
  fontSize:22,
  fontWeight:"600",
  marginTop:22,
  
},
secondaryText:{
  color:"#FFD764",
  marginBottom:56,
  paddingVertical:10,
 
  
},
});
