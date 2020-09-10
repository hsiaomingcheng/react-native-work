import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';

export default function Setting() {
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        getLocalStorage();
    }, []);

    const getLocalStorage = async () => {
        const getName = await StorageHelper.getUserName('name');

        if (getName) {
            setInputText(getName);
        }
    }

    const handleSetName = async () => {
        await StorageHelper.setUserName('name', inputText);
    }

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
            <Text>Hello {inputText ? '我是' : ''}{inputText}!!</Text>
            <Button
                title="設定我的名字"
                onPress={() => handleSetName()}
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
