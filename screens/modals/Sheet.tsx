import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Presentation: Form Sheet</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
          Without using any other library, we can create a form sheet.
        </Text>
        <Text>
          This makes it easier to add these modals and configure them to the how
          we need them.
        </Text>
        <Text>
          Something to note is that this is technically a new screen, so when we
          open and close this modal we are seeing the pokemon RSC flash and re
          render
        </Text>
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
