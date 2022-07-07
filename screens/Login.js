import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged  } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";

export default function Login() {
  
  // declare the states......
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

    // random name generator............
    const names = [
      "Anik",
      "Joffer",
      "Moyank",
      "Charlee",
      "Premo",
      "Levos",
      "Thrive",
    ];
    const getRandom = () => {
      const a = names[Math.floor(Math.random() * names.length)];
      return a;
    };
    
   

  useEffect(()=>{

    const breakscreen = onAuthStateChanged(auth, (user) => {
      if (user) {
        const pname = getRandom();
        // const uid = user.uid;
        
        navigation.navigate("Home" , {pname})
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return breakscreen;

  },[])

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email)
        alert("Registration Successful")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)
        // ..
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email)
        alert("Login Successful")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)
        // ..
      });
  };

  return (
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.container}>
      <View>
        <Text style={styles.brand}>Niks Quiz</Text>
      </View>

      {/* adding email and pass input field */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email} onChangeText={text=> setEmail(text) }
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password} onChangeText={text=>setPassword(text) }
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* adding login and register btn */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand:{
    textAlign:"center",
    marginVertical:22,
    fontSize:36,
    fontWeight:"600",
    color:"#0E73AA"
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    backgroundColor: "#0E73AA",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonOutline: {
    backgroundColor: "#0c6291",
  },
});
