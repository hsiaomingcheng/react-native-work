import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [valid, setValid] = useState();
  const phoneNumber = '0939079170';

  function handleText(e) {
    setInputValue(e);

    if (phoneNumber !== e) {
      setValid(false);
    } else {
      setValid(true);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => handleText(text)}
        value={inputValue}
        keyboardType="numeric"
        maxLength={10}
      />
      <Text>您輸入的手機號碼是：{inputValue}</Text>
      {
        inputValue !== '' && <Text>{valid ? '輸入成功！' : '手機輸入錯誤！'}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: 300,
    borderRadius: 0,
    borderColor: 'darkgray',
    borderWidth: 5,
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 28,
    textAlign: 'center'
  }
});
