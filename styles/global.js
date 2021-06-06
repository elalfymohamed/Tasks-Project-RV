import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    height: "100%",
    width: "100%",

    paddingHorizontal: 50,
    paddingTop: 15,
    paddingBottom: 0,
  },
  // Home Input
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  //
  containerItem: {
    flex: 1,
    marginTop: 10,
  },
  //
  item: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allMessage: {
    position: "absolute",
    right: 125,
    bottom: 0,
    marginBottom: 5,
    opacity: 1,
    zIndex: 100,
  },
  hideMessage: {
    opacity: 0,
  },

  allMessageText: {
    textAlign: "center",
    backgroundColor: "#0008",
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius: 50,
    color: "#fff",
    fontWeight: "400",
  },
  allMessageTextIOS: {
    textAlign: "center",
    backgroundColor: "#0008",
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius: 18,
    color: "#fff",
    fontWeight: "400",
    overflow: "hidden",
  },
});
