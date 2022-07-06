import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

export default function Quiz({ navigation }) {
  const [ques, setQues] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const getQuestions = async () => {
    const url = "https://opentdb.com/api.php?amount=10&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    setQues(data.results);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  console.log(ques);
  return (
    <View style={styles.quizContainer}>
      {ques && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.screenTextH}>Q.{ques[quesNo].question}</Text>
          </View>

          <View style={styles.options}>
            <View>
              <TouchableOpacity>
                <Text style={styles.screenTextP}>Option ONE</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.screenTextP}>Option TWO</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.screenTextP}>Option THREE</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.screenTextP}>Option FOUR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Result")}>
          <Text>End</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    marginTop: "20%",
    marginHorizontal: 22,
  },
  parent:{
      flex:1
  },
  top: {},
  options: {
    flex: 1,
    paddingHorizontal: 16,
  },
  screenTextH: {
    fontSize: 22,
    fontWeight: "600",
  },
  screenTextP: {
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "500",
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#FFD764",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
  },
});
