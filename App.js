import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [isShowText, setIsShowText] = useState();

  function handleText(e) {
    setInputValue(e);
    setIsShowText(false);
  }

  function handleStateText() {
    setIsShowText(true);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => handleText(text)}
        value={inputValue}
        keyboardType="numeric"
        maxLength={4}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleStateText()}
      >
        <Text style={styles.text}>Enter</Text>
      </TouchableOpacity>

      {
        isShowText === true && <Text>{inputValue === '1234' ? '輸入成功!' : '輸入錯誤!'}</Text>
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
  },
  button: {
    margin: 10,
    backgroundColor: '#00a1ff',
    borderRadius: 15,
    height: 50,
    width: 300
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 50
  }
});
