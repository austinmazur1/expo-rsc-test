"use server"; //RSC
import Types from "@/components/Types";
import { Image, ScrollView, Text, View } from "react-native";
import "server-only"; //Additional layer to really make sure this only runs on the server. Not necessary though.

export async function Pokemon({ id }: { id: number }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return (
    <View style={{ padding: 8, borderWidth: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data.name}</Text>
      <Image
        source={{ uri: data.sprites.front_default }}
        style={{ width: 100, height: 100 }}
      />
      {data.abilities.map((ability: any) => (
        <Text key={ability.ability.name}>- {ability.ability.name}</Text>
      ))}
      <Types types={data.types} />
    </View>
  );
}

export async function PokemonList() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 8,
        gap: 8,
        justifyContent: "center",
      }}
    >
      {data.results.map((pokemon: any) => (
        <Pokemon key={pokemon.name} id={pokemon.name} />
      ))}
    </ScrollView>
  );
}
