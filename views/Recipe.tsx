import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import Underline from "../components/Underline";
import StepsList from "../components/StepsList";
import styles from "../styles/styles";
import { Avatar } from "react-native-elements";

const Recipe: FunctionComponent = () => (
  <View>
    <View>
      <View style={styles.flexRow}>
        <Text style={{ ...styles.header, flexGrow: 1 }}>Recipe title</Text>
        <Avatar rounded size="large" title="123:45" />
      </View>
      <Underline />
    </View>
    <StepsList />
  </View>
);
export default Recipe;
