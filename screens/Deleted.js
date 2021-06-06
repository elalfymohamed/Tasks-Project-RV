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
import { deleteTask } from "../store/action";

export default function Deleted() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const removeTask = (id) => dispatch(deleteTask(id));

  const deletedDone = tasks.filter((item) => item.deleted === true);

  return (
    <View style={global.container}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Recently deleted</Text>
      {deletedDone.length > 0 ? (
        <FlatList
          data={deletedDone}
          renderItem={({ item }) => (
            <TouchableOpacity style={global.item}>
              <Text
                style={
                  item.done
                    ? { textDecorationLine: "line-through", fontWeight: "500" }
                    : { fontWeight: "bold" }
                }
              >
                {item.task}
              </Text>
              <Button
                title="delete"
                color="red"
                onPress={() => removeTask(item.id)}
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
            source={require(`../assets/undraw_Throw_away_re_x60k.png`)}
          />
        </View>
      )}
    </View>
  );
}
