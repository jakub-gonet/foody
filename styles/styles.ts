import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#3f7200";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  underline: {
    borderBottomColor: PRIMARY_COLOR,
    borderBottomWidth: 4
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    fontSize: 50
  }
});
