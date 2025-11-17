import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSecond }) => {
  const date = new Date(totalSecond * 1000);
  const options = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 53,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
