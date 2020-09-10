import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { changeName } from '../redux/action';

export default function Setting() {
    const [inputText, setInputText] = useState('');
    const myNewName = useMappedState(state => state.newName);
    const dispatch = useDispatch();

    const onChangeText = (e) => {
        setInputText(e);
    }

    return (
        <View style={styles.container}>
            <Text>這是Setting頁面</Text>
            <TextInput
                style={styles.input}
                onChangeText={e => onChangeText(e)}
                value={inputText}
            />
            <Text>Hello {myNewName ? '我是' : ''}{myNewName}!!</Text>
            <Button
                title="Redux 設定我的名字"
                onPress={() => dispatch(changeName(inputText))}
            />
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
    input: {
        borderWidth: 1,
        width: 250,
        height: 40,
        backgroundColor: 'darkgray',
        textAlign: 'center',
        fontSize: 20
    }
});
