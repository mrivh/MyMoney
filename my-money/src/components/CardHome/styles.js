import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  text: {
    color: "#00296A",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
