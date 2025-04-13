import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tools Dashboard" }} />
      <Stack.Screen
        name="percentage-calculator/index"
        options={{ title: "Percentage Calculator" }}
      />
    </Stack>
  );
}
