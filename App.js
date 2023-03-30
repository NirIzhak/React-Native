import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShowItems from './src/Screens/ShowItems';

export default function App() {
  return (
    <View>
      <ShowItems/>
      <StatusBar style="auto" />
    </View>
  );
}



