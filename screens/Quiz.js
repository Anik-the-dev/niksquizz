import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

export default function Quiz({ navigation }) {
  const [ques, setQues] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  //   fetch quiz question api...................
  const getQuestions = async () => {
    setLoading(true);
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQues(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  // array suffle for suffling the quiz question
  const shuffleOptions = (opt) => {
    for (let i = opt.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opt[i], opt[j]] = [opt[j], opt[i]];
    }
  };

  //handle next button........
  const handleNextButton = () => {
    setQuesNo(quesNo + 1);
    setOptions(generateOptionsAndShuffle(ques[quesNo + 1]));
  };

  // suffle the options
  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    console.log(_question.correct_answer)

    shuffleOptions(options);

    return options;
  };

  const handlSelectedOption = (_option) => {
    console.log(_option === ques[quesNo].correct_answer)
    if (_option === ques[quesNo].correct_answer) {
      setScore(score+1);
    }
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(generateOptionsAndShuffle(ques[quesNo + 1]));
    }
    if (quesNo === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View style={styles.quizContainer}>
      {loading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "600" }}>LOADING...</Text>
        </View>
      ) : (
        ques && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.screenTextH}>
                Q{quesNo + 1}.{decodeURIComponent(ques[quesNo].question)}
              </Text>
            </View>

            <View style={styles.options}>
              <View>
                <TouchableOpacity  style={styles.button} onPress={()=>handlSelectedOption(options[0])}>
                  <Text style={styles.screenTextP}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={()=>handlSelectedOption(options[1])}>
                  <Text style={styles.screenTextP}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={()=>handlSelectedOption(options[2])}>
                  <Text style={styles.screenTextP}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={()=>handlSelectedOption(options[3])}>
                  <Text style={styles.screenTextP}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.buttonSmall} onPress={()=>alert("Can't Skip")}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              {quesNo !== 9 && (
                <TouchableOpacity
                  style={styles.buttonSmall}
                  onPress={handleNextButton}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              )}
              {quesNo === 9 && (
                <TouchableOpacity
                  style={styles.buttonSmall}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonText}>Show Result</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
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
  parent: {
    flex: 1,
  },
  top: {},
  options: {
    flex: 1,
    marginTop:16,
    paddingHorizontal: 2,
  },
  screenTextH: {
    fontSize: 22,
    fontWeight: "600",
  },
  screenTextP: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "500",
    color:"#fff"
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    marginVertical:10,
    backgroundColor: "#0E73AA",
    borderRadius: 5,

  },
  buttonSmall:{
    paddingVertical:8,
    paddingHorizontal:16,
    backgroundColor: "#0E73AA",
    borderRadius: 5,
    marginVertical:10,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 18,
    color:"#fff"
  },
});
