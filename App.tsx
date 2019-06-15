import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import styles from "./styles/styles";
import RecipeInfo from "./views/RecipeInfo";

const MainNavigator = createStackNavigator(
  { RecipeInfo: RecipeInfo },
  { initialRouteName: "RecipeInfo" }
);

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return <AppContainer />;
}
