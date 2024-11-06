import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#04f",
        }}
      >
        BienVenue
      </Text>
      <TextInput
        style={styles.textInputStyle}
        keyboardType="email-address"
        placeholder="enter your email"
      ></TextInput>
      <TextInput
        style={styles.textInputStyle}
        secureTextEntry
        placeholder="enter your password"
      ></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="submit"></Button>
        <Button title="exit"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    height: 45,
    width: "95%",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
  buttonContainer: { flex: 1 },
});
