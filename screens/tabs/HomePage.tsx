import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetchData("Developer").then((result) => {
      setGreeting(result.message);
    });
  });
  const fetchData = async (name: string) => {
    // When using fetch, expo under the hood handles the route locally
    const response = await fetch(`/api/welcome?name=${name}`);
    const data = await response.json();
    return data;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>{greeting}</Text>
      <View style={styles.textContainer}>
        <Text>
          This is a simple setup in order to test some new features of expo
          router and react server functions.
        </Text>
        <Text>
          We use the new 'protected' route feature from Expo SDK53. This allows
          us to easily manage what screens the user has access without having to
          do useEffects or redirects.
        </Text>
        <Text>
          Along with those new features, I'm also testing and further developing
          my skills and knowledge with nested layouts, modals, sheets, and tabs.
        </Text>
        <Text>
          The 'greeting' in this screen is fetched from an API route. As per the
          docs in order to work with this we need to change the web.output to
          "server" in the app.json file. From there we set it up similar to how
          we would in a Next.js project.
        </Text>
        <Text>
          The 'News' and 'Sheet' screens are modal screens. They are created
          simply by using Stack.Screen and changing the 'presentation' prop to
          either 'modal' or 'formSheet'. This is great because we dont need to
          use an external library.
        </Text>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
});
