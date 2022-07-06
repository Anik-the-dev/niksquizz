import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {auth} from '../firebase'

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* adding email and pass input field */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          //value={ } onChangeText={text=> }
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          //value={ } onChangeText={text=> }
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* adding login and register btn */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
      width:'80%'

  },
  input: {
      backgroundColor:"#fff",
      paddingHorizontal:15,
      paddingVertical:10,
      marginTop:10,
      borderRadius:5

  },
  buttonContainer: {
      width:'80%',
      
      

  },
  button: {
    backgroundColor:"#0E73AA",
    paddingHorizontal:15,
    paddingVertical:15,
    marginTop:10,
    borderRadius:5,

    
      
  },
  buttonText: {
      color:"#fff",
      textAlign:"center"
    

  },
  buttonOutline: {
    backgroundColor:'#0c6291'

  },
});