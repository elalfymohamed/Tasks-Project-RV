import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addTask, didTask, moveDeletedTask } from "../store/action";

import { global } from "../styles/global";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filterTasks = tasks.filter(
    (item) => item.done === false && item.deleted === false
  );

  const changeHandler = (val) => {
    setText(val);
  };

  const submitTask = (text) => {
    if (!text) {
      Alert.alert("No tasks?", "Please add a task");
    } else {
      dispatch(addTask(text));
      setText("");
    }
  };

  const moveDeleteTask = (id) => dispatch(moveDeletedTask(id));

  const finishTask = (id) => dispatch(didTask(id));

  useEffect(() => {
    setTimeout(() => {
      setType("");
    }, 2000);
  });

  return (
    <>
      <View style={global.container}>
        <TextInput
          style={global.input}
          placeholder="Add new task"
          onChangeText={changeHandler}
          value={text}
        />
        <Button
          title="add task"
          color="blue"
          onPress={() => submitTask(text) || setType("addTask")}
        />
        <View style={global.containerItem}>
          {filterTasks.length > 0 ? (
            <FlatList
              data={filterTasks}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={global.item}
                  onPress={() => navigation.navigate("Task", item)}
                >
                  <Text
                    style={
                      item.done
                        ? {
                            textDecorationLine: "line-through",
                            fontWeight: "500",
                          }
                        : { fontWeight: "bold" }
                    }
                    onPress={() => finishTask(item.id) || setType("done")}
                  >
                    {item.task}
                  </Text>
                  <Button
                    title="delete"
                    color="red"
                    onPress={() => moveDeleteTask(item.id) || setType("delete")}
                  />
                </TouchableOpacity>
              )}
            />
          ) : (
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "center" }}
                source={require(`../assets/undraw_add_tasks_mxew.png`)}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "400",
                  paddingTop: 5,
                  color: "#0016",
                }}
              >
                Not Tasks, add a tasks
              </Text>
            </View>
          )}
        </View>
        <View style={type ? global.allMessage : global.hideMessage}>
          {Platform.OS === "ios" ? (
            <Text style={global.allMessageTextIOS}>
              {type === "delete" && "delete..."}
              {type === "done" && "Done."}
              {type === "addTask" && "Add Task"}
            </Text>
          ) : (
            <Text style={global.allMessageText}>
              {type === "delete" && "delete..."}
              {type === "done" && "Done."}
              {type === "addTask" && "Add Task"}
            </Text>
          )}
        </View>
      </View>
    </>
  );
}
