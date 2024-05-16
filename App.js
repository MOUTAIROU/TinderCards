import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TinderScreen from './Tinder';

export default function App() {
  return (

    <GestureHandlerRootView>
      <View style={styles.container}>
      <TinderScreen/>
      <StatusBar style="auto" />
    </View>
    
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
