import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {"\n"}produtividade,{"\n"}
          <Text style={styles.bold}>mergulhe no que{"\n"} importa</Text>
        </Text>
        <Image source={require("../assets/images/home.png")} />
        <FokusButton
          title="Quero iniciar!"
          onPress={() => router.navigate("./pomodoro")}
        />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  inner: {
    gap: 16,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    width: "80%",
  },
});
