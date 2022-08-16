import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 100,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#EEEEEE",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderTopStartRadius: 90,
    borderBottomStartRadius: 90,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 90,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    marginLeft: 20,
    borderWidth: 1,
  },
  union: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 10,
    color: "#000000",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default styles;
