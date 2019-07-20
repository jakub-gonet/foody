import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#3f7200"

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  underline: {
    borderBottomColor: PRIMARY_COLOR,
    borderBottomWidth: 4,
  },
});
