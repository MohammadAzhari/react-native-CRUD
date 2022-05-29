import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../colors";
import Input from "./Input";
import Main from "./main";

export default function Home() {
  // items states :
  const [development, setdevelopment] = useState([
    { title: "complete frist mobile app", complete: 70 },
    { title: "complete course", complete: 20 },
  ]);
  const [reading, setreading] = useState([
    { title: "complete EI Book", complete: 32 },
  ]);
  const [university, setuniversity] = useState([
    { title: "start reading", complete: 0 },
  ]);

  // router states :
  const [inputRoute, setInputRoute] = useState(false);
  const [developmentRoute, setdevelopmentRoute] = useState(false);
  const [readingRoute, setreadingRoute] = useState(false);
  const [universityRoute, setuniversityRoute] = useState(false);

  // set all routes to false :
  const falser = () => {
    setdevelopmentRoute(false);
    setreadingRoute(false);
    setuniversityRoute(false);
  };

  // add item to category :
  const add = {
    development: (item) => {
      setdevelopment([...development, item]);
    },
    reading: (item) => {
      setreading([...reading, item]);
    },
    university: (item) => {
      setuniversity([...university, item]);
    },
  };

  return (
    <SafeAreaView style={styles.body}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>self managment application</Text>
      </View>
      {inputRoute ? (
        <Input back={setInputRoute} add={add} />
      ) : (
        <>
          <View style={styles.select}>
            <TouchableOpacity
              onPress={() => {
                falser();
                setdevelopmentRoute(true);
              }}
            >
              <View style={styles.selectBtns}>
                <Text>Development</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                falser();
                setreadingRoute(true);
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
                falser();
                setuniversityRoute(true);
              }}
            >
              <View
                style={[styles.selectBtns, { backgroundColor: colors.success }]}
              >
                <Text>university</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            {/* router handler */}
            {developmentRoute ? (
              <Main
                list={development}
                set={setdevelopment}
                bg={colors.primary}
              />
            ) : readingRoute ? (
              <Main list={reading} set={setreading} bg={colors.danger} />
            ) : universityRoute ? (
              <Main list={university} set={setuniversity} bg={colors.success} />
            ) : (
              <Text style={styles.headerText}>select a category</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.input}
            onPress={() => {
              setInputRoute(true);
            }}
          >
            <Text style={styles.headerText}>+</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#eeeeee",
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  headerText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  select: {
    backgroundColor: "#ffffff",
    flex: 0.1,
    marginTop: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 15,
  },
  selectBtns: {
    backgroundColor: colors.primary,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  main: {
    flex: 0.5,
    width: "100%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.primary,
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 40,
    bottom: "10%",
    right: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
