import { AuthContext } from "@/provider/AuthProvider";
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} />
          </View>
        </View>
        <Button title="Login" onPress={() => login(email, password)} />
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "70%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
});
