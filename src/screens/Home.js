import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text>這是Home頁</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { props.navigation.push('DogDetail') }}
                >
                    <Text style={styles.text}>狗 Dog</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { props.navigation.push('CatDetail') }}
                >
                    <Text style={styles.text}>貓 Cat</Text>
                </TouchableOpacity>
            </View>
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
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        margin: 10,
        backgroundColor: 'pink',
        width: 100,
        height: 50,
        alignItems: "center",
    },
    text: {
        lineHeight: 50
    }
});