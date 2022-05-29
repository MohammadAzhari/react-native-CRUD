import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";
import Add from "./Add";

export default function Input({ back, add }) {
  const [category, setcategory] = useState("");
  const [input, setinput] = useState(false);

  return (
    <View style={styles.container}>
      {input ? (
        <Add add={add} back={setinput} category={category} />
      ) : (
        <>
          <View style={styles.title}>
            <Text style={styles.titleText}> Enter a goal </Text>
          </View>
          <View style={styles.select}>
            <TouchableOpacity
              onPress={() => {
                setinput(true);
                setcategory("Development");
              }}
            >
              <View style={styles.selectBtns}>
                <Text>Development</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setinput(true);
                setcategory("Reading");
              }}
            >
              <View
                style={[styles.selectBtns, { backgroundColor: colors.danger }]}
              >
                <Text>reading</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setinput(true);
                setcategory("University");
              }}
            >
              <View
                style={[styles.selectBtns, { backgroundColor: colors.success }]}
              >
                <Text>university</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.back}>
            <Button
              title="back"
              color={"black"}
              onPress={() => {
                back(false);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "30%",
    flex: 0.4,
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: "30%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  selectBtns: {
    backgroundColor: colors.primary,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  titleText: {
    color: colors.myBlue,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  back: {
    marginTop: "5%",
  },
});
