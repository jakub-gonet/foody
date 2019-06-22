import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import styles from "./styles/styles";
import Recipe from "./views/Recipe";

const MainNavigator = createStackNavigator(
  { Recipe: Recipe },
  { initialRouteName: "Recipe" }
);

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return <AppContainer />;
}
