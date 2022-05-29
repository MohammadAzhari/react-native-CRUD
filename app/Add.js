import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../colors";

export default function Add({ add, back, category }) {
  const [title, settitle] = useState("");
  const [complete, setcomplete] = useState("");

  const handleAdd = () => {
    if (category === "Development") {
      add.development({ title, complete });
    } else if (category === "Reading") {
      add.reading({ title, complete });
    } else {
      add.university({ title, complete });
    }
    back(false);
  };

  return (
    <>
      <View style={styles.title}>
        <Text style={styles.primaryText}> Title : </Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => {
            settitle(text);
          }}
        />
      </View>
      <View style={styles.complete}>
        <Text style={styles.primaryText}> complete % : </Text>
        <TextInput
          style={styles.input}
          value={complete}
          keyboardType={"numeric"}
          onChangeText={(text) => {
            setcomplete(text);
          }}
        />
      </View>
      <View style={styles.btns}>
        <View style={styles.selectBtns}>
          <Button
            title="cancle"
            color={"black"}
            onPress={() => {
              back(false);
            }}
          />
        </View>
        <View style={styles.selectBtns}>
          <Button title="add" color={"green"} onPress={handleAdd} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "90%",
    marginBottom: "5%",
    height: 70,
  },
  complete: {
    width: "70%",
    marginBottom: "5%",
  },
  input: {
    backgroundColor: "white",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    textAlign: "center",
  },
  primaryText: {
    textAlign: "center",
    color: colors.myBlue,
    fontSize: 20,
    fontWeight: "bold",
  },
  btns: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
