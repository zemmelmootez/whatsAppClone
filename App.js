import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 350,
          width: "95%",
          /*   backgroundColor: "#0005", */
          borderRadius: 15,
        }}
      >
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
          placeholderTextColor="#fff"
        ></TextInput>
        <TextInput
          style={styles.textInputStyle}
          secureTextEntry
          placeholderTextColor="#fff"
          placeholder="enter your password"
        ></TextInput>
        <View style={styles.buttonContainer}>
          <Button title="submit"></Button>
          <Button title="exit"></Button>
        </View>
        <Text
          style={{
            width: "100%",
            textAlign: "right",
            fontSize: 14,
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          Create new user
        </Text>
        <StatusBar style="auto" />
      </View>
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
    backgroundColor: "#00fa",
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    padding: 20,
    margin: 20,
    gap: 20,
  },
});
