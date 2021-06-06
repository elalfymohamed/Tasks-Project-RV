import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { global } from "../styles/global";
import { moveDeletedTask, notDidTask } from "../store/action";

export default function About() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const moveDeleteTask = (id) => dispatch(moveDeletedTask(id));
  const finishTask = (id) => dispatch(notDidTask(id));

  const filterTasks = tasks.filter(
    (item) => item.done === true && item.deleted === false
  );

  return (
    <View style={global.container}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>
        Task that has done
      </Text>
      {filterTasks.length > 0 ? (
        <FlatList
          data={filterTasks}
          renderItem={({ item }) => (
            <TouchableOpacity style={global.item}>
              <Text
                style={
                  item.done
                    ? { textDecorationLine: "line-through", fontWeight: "500" }
                    : { fontWeight: "bold" }
                }
                onPress={() => finishTask(item.id)}
              >
                {item.task}
              </Text>
              <Button
                title="delete"
                color="red"
                onPress={() => moveDeleteTask(item.id)}
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
            source={require(`../assets/undraw_Project_completed_re_pqqq.png`)}
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
            Not done Tasks
          </Text>
        </View>
      )}
    </View>
  );
}
