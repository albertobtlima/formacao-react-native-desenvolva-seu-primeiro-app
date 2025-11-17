import { StyleSheet, Text } from "react-native";

export const Footer = () => {
  return (
    <>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura & Alberto.</Text>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    textAlign: "center",
    color: "#98a0a8",
    fontSize: 12.5,
  },
});
