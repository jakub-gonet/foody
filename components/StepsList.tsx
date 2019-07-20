import React, { FunctionComponent, ReactNode } from "react";
import { View, Text } from "react-native";
import Step from "../models/Step";

interface Props {
  step: Step;
}

const StepsList: FunctionComponent<Props> = ({ step }) => {
  return (
    <View>
      <Text>{step.title}</Text>
      {step.children.map((step, i) => (
        <StepsList key={i} step={step}></StepsList>
      ))}
    </View>
  );
};

export default StepsList;
