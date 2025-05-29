import { Stack } from "expo-router";
// We render a slot here rather than a tabs.
// This is a root level layout for our whole auth group
// Slot allows us to have more customization inside.

// On web this is useful so that if we refresh the page on a modal, we always see the back button.
export const unstable_settings = {
  anchor: "(tabs)",
};

const Layout = () => {
  return (
    // <Slot/>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/news"
        options={{ presentation: "modal", title: "Modal" }}
      />
      <Stack.Screen
        name="(modal)/sheet"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.5, 1],
          sheetCornerRadius: 50,
          contentStyle: {
            padding: 16,
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
