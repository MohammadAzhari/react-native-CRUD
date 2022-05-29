import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";
import Edit from "./Edit";

export default function Main({ list, set, bg }) {
  const [edit, setEdit] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  //   deletes function :
  const deleteHandler = (item) => {
    let arr = list.filter((i) => i !== item);
    set(arr);
    setEdit(false);
  };

  const content = list.length ? (
    list.map((item, i) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setEdit(true);
            setItemSelected(item);
          }}
          key={i}
          style={styles.list}
        >
          <View>
            <Text style={styles.listTitle}> {item.title} </Text>
          </View>
          <View>
            <Text style={styles.listComplete}> {item.complete} % </Text>
          </View>
        </TouchableOpacity>
      );
    })
  ) : (
    <Text style={styles.listComplete}>there is no items to show</Text>
  );

  return (
    <View style={[{ backgroundColor: bg }, styles.container]}>
      {edit ? (
        <Edit
          list={list}
          itemSelected={itemSelected}
          set={set}
          back={setEdit}
          deleteHandler={deleteHandler}
        />
      ) : (
        content
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  list: {
    height: "10%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
  },
  listTitle: {
    fontSize: 20,
    color: colors.myBlue,
    fontWeight: "bold",
  },
  listComplete: {
    fontWeight: "bold",
  },
});
