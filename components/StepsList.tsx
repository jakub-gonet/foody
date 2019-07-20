import React, { FunctionComponent, ReactNode } from "react";
import { View, Text } from "react-native";
import Step from "../models/Step";
import styles from "../styles/styles";
import { Avatar } from "react-native-elements";

interface Props {
  steps: Step[];
  topLevel?: boolean;
}

const StepsList: FunctionComponent<Props> = ({ steps, topLevel }) => {
  return (
    <View style={!topLevel && styles.step}>
      {steps.map((step, i) => (
        <View key={i}>
          <View style={styles.flexRow}>
            <Avatar rounded size="small" title={String(i + 1)} containerStyle={{ marginRight: 10 }} />
            <Text>{step.title}</Text>
          </View>
          <StepsList steps={step.children} />
        </View>
      ))}
    </View>
  );
};

export default StepsList;
