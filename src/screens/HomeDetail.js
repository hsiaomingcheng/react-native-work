import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeDetail(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: props.route.params.img,
                }}
            />
            <Text style={styles.title}>{props.route.params.title}</Text>
            <Text style={styles.text}>{props.route.params.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15,
        width: 150,
        height: 150
    },
    title: {
        marginBottom: 15,
        fontSize: 26,
        textAlign: 'center'
    },
    text: {
        fontSize: 18,
        lineHeight: 22
    }
});
