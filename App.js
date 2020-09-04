import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>分享按鈕</Text>
      <MyButton title="Facebook" bgColor="#4682b4" />
      <MyButton title="Line" bgColor="#00bd00" />
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
