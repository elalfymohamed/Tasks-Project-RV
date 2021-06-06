import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Task from "../screens/Task";
import About from "../screens/About";
import Deleted from "../screens/Deleted";

const Stack = createStackNavigator();
const screenOptionsStyle = {
  headerStyle: {
    backgroundColor: "#FF2B5D",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyle}>
      <Stack.Screen name="Done" component={About} />
    </Stack.Navigator>
  );
};

const DeletedStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyle}>
      <Stack.Screen name="Deleted" component={Deleted} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{
        //   headerStyle: {
        //     backgroundColor: "red",
        //   },
        //   headerTintColor: "white",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        // }}
      />
      <Stack.Screen
        name="Task"
        component={Task}
        options={({ route }) => ({ title: route.params.task })}
      />
    </Stack.Navigator>
  );
};

export { AboutStack, HomeStack, DeletedStack };
