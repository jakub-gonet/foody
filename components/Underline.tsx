import React, { Component } from "react";
import { View } from "react-native";
import styles from "../styles/styles";

interface Props { }
export default class Underline extends Component<Props> {
    render() {
        return (<View style={styles.underline}></View>);
    }
}