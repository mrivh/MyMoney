import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function SliderScreen({ navigation }) {
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={() => navigation.navigate("loginScreen")}
        showSkipButton={true}
        onSkip={() => navigation.navigate("loginScreen")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Lleva a cabo un control determinado por tí",
    title: "Finanzas",
    image: require("../../../assets/icons/finance.png"),
    backgroundColor: "#00296A",
  },
  {
    key: "s2",
    title: "Ahorro",
    text: "Para esas metas... viajes... y cualquier plan",
    image: require("../../../assets/icons/saving.png"),
    backgroundColor: "#00296A",
  },
  {
    key: "s3",
    title: "Ayuda",
    text: "Siempre te acompañamos en cada paso",
    image: require("../../../assets/icons/plans.png"),
    backgroundColor: "#00296A",
  },
];
