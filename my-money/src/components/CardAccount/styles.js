import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 180,
    marginTop: 50,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
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
    color: "#F2CA50",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 10,
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default styles;
