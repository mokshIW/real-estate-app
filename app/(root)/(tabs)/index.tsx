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

      {/* TimeStamp 1:22:48 - Profile Screen */}
      <Link href="/sign-in">Sign In</Link>
    </View>
  );
}
