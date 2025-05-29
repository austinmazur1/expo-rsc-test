'use server'

import { Text } from "react-native";

// Server component RSC
// This runs on server!
// Not bundled with our react native application

// We can make a DB call here
// Render full views
export async function renderInfo({name}: {name: string}) {
  return <Text style={{fontSize: 20, fontWeight: "bold"}} >Hello, {name}</Text>;
}
