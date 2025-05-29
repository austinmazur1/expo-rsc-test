import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Presentation: Modal</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
          This is a modal that is presented using presentation of modal on a
          Stack.Screen.
        </Text>
        <Text>Very simple to implement, and very easy to configure.</Text>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textContainer: {
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
});
