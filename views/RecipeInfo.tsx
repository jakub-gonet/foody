import React, { Component } from "react";
import { View, Text } from "react-native";
import Underline from "../components/Underline";
import StepsList from "../components/StepsList";

interface Props { }
export default class RecipeInfo extends Component<Props> {
    render() {
        return (
            <View>
                <View>
                    <Text>Recipe title</Text>
                    <Text>Timer</Text>
                    <Underline />
                </View>
                <StepsList />
            </View>
        );
    }
}