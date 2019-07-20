import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#3f7200";

export default StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center"
  },
  underline: {
    borderBottomColor: PRIMARY_COLOR,
    borderBottomWidth: 4,
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  header: {
    fontSize: 50
  },
});
