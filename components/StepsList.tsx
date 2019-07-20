import React, { FunctionComponent, ReactNode, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Step from "../models/Step";
import styles from "../styles/styles";
import { Avatar } from "react-native-elements";
import Collapsible from "react-native-collapsible";

import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  steps: Step[];
  topLevel?: boolean;
}

const StepsList: FunctionComponent<Props> = ({ steps, topLevel }) => {
  const [stepsCollapsed, setStepsCollapsed] = useState(false);
  const renderCollapseButton = (shouldRender: boolean) => {
    return (
      shouldRender && (
        <TouchableOpacity onPress={() => setStepsCollapsed(!stepsCollapsed)}>
          {stepsCollapsed ? <Icon name="expand-less" style={styles.icon} /> : <Icon name="expand-more" style={styles.icon} />}
        </TouchableOpacity>
      )
    );
  };

  return (
    <View style={!topLevel && styles.step}>
      {steps.map((step, i) => (
        <View key={i}>
          <View style={styles.flexRow}>
            <Avatar rounded size="small" title={String(i + 1)} containerStyle={{ marginRight: 10 }} />
            <Text style={{flexGrow: 1}}>{step.title}</Text>
            {renderCollapseButton(step.children.length > 0)}
          </View>
          <Collapsible collapsed={stepsCollapsed}>
            <StepsList steps={step.children} />
          </Collapsible>
        </View>
      ))}
    </View>
  );
};

export default StepsList;
