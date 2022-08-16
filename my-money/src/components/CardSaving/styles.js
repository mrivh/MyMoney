import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 100,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
    justifyContent: "center",
  },
  union: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginRight: 30,
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
    color: "#FFD700",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 5,
    color: "#00296A",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default styles;
