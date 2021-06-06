import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AboutStack, DeletedStack, HomeStack } from "./MyStack";
import MyTab from "./MyTab";

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTab} />
      <Drawer.Screen name="Done" component={AboutStack} />
      <Drawer.Screen name="Deleted" component={DeletedStack} />
    </Drawer.Navigator>
  );
}
