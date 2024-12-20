import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-rubik text-blue-500 font-bold my-10">
        Welcome To ReState!
      </Text>

      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Exlore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
