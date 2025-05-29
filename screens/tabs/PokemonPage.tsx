import { PokemonList } from "@/actions/pokemon";
import React, { Suspense } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator />}>{PokemonList()}</Suspense>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
