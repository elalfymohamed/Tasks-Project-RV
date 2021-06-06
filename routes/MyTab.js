import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStack, HomeStack, DeletedStack } from "./MyStack";

export default function MyTab() {
  const Tab = createBottomTabNavigator();

  const screenOptionsStyle = {
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "500",
      fontSize: 16,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptionsStyle}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Done" component={AboutStack} />
      <Tab.Screen name="Deleted" component={DeletedStack} />
    </Tab.Navigator>
  );
}
