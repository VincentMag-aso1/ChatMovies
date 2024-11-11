import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-pink-500">
      <Text className="text-3xl font-extrabold text-white">ChatMovies</Text>
      <Link href="profile" className="text-white"></Link>
      <Link href="home" className="text-black">HOME</Link>
      <StatusBar style="auto" />
    </View>
  );
}