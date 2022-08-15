import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logocontainer: { marginTop: 100 },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  formcontainer: {
    width: 320,
    height: 180,
    marginTop: 50,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 30,
    color: "#07D9D9",
    marginBottom: 30,
  },
  logoscontainer: { width: "100%", height: 150 },
  logosdireccion: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;
