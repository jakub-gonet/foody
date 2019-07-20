import React, { FunctionComponent, useState } from "react";
import { View, Text } from "react-native";
import Underline from "../components/Underline";
import StepsList from "../components/StepsList";
import styles from "../styles/styles";
import { Avatar } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

const Recipe: FunctionComponent = () => {
  const [infoCollapsed, setInfoCollapsed] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flexRow}>
          <TouchableOpacity onPress={() => setInfoCollapsed(!infoCollapsed)}>
            <Text style={{ ...styles.header, flexGrow: 1, marginRight: 10 }}>Recipe title</Text>
          </TouchableOpacity>
          <Avatar rounded size="large" title="123:45" />
        </View>
        <Underline />
        <Collapsible collapsed={infoCollapsed}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venit ad extremum; Ita ne hoc quidem modo paria peccata sunt.
            Quo studio Aristophanem putamus aetatem in litteris duxisse?
          </Text>
        </Collapsible>
      </View>
      <StepsList />
    </View>
  );
};
export default Recipe;
