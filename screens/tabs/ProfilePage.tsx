import { renderInfo } from "@/actions/render-info";
import { myAction } from "@/actions/server-action";
import { AuthContext } from "@/provider/AuthProvider";
import { Suspense, use, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
const Page = () => {
  const { user, role, logout } = use(AuthContext);
  const [counter, setCounter] = useState(0);

  const invokeActionHandler = async () => {
    const newCounter = await myAction(counter);
    setCounter(newCounter);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>User: {user}</Text>
        <Text style={styles.text}>Role: {role}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          React Server Action Example
        </Text>
        <View style={styles.innerButtonContainer}>
          <Button title="Call action" onPress={invokeActionHandler} />
          <Text>{counter}</Text>
        </View>
      </View>

      <View style={styles.suspenseContainer}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          React Server Component Example
        </Text>
        <Suspense fallback={<ActivityIndicator />}>
          {renderInfo({ name: "Austin" })}
        </Suspense>
      </View>
      <Button title="Logout" onPress={() => logout()} />
      <View style={styles.textContainer}>
        <Text>
          Here we have two examples using sever rendered data. The first is a
          simple server action that increments a counter. The second is a very
          simple server component that returns the Text tsx.
        </Text>
        <Text>
          Take note, that when we use the server action, we can see the suspense
          of the server component. Keep this in mind when using server actions
          to ensure performance.
        </Text>
        <Text>
          Also another thing to look at, when we logout, we arent calling any
          router.replace, or useEffect, or Link. Simply with the new protected
          routes from this new Expo Router update we are redirected to the login
          page thanks to the guard prop.
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
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  innerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  suspenseContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
});
