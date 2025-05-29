import { Stack } from "expo-router";
// Better for separation of concerns

const Layout = () => {
  return (
    <Stack> 
        <Stack.Screen name="index" options={{ headerShown: false}} />  
    </Stack>
  );
};

export default function PublicLayout() {
  return <Layout />
}
