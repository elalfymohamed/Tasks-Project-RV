import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MyDrawer from "./routes/MyDrawer";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
