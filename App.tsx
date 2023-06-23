import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import ApplicationNavigator from './src/navigators/Application';

export default function App() {
  return (
    <NativeBaseProvider>
    <ApplicationNavigator />
    </NativeBaseProvider>
  );
}
