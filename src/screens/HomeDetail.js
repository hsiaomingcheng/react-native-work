import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

export default function HomeDetail(props) {
    const img = props.route.params.Image ?
        { uri: props.route.params.Image }
        :
        require('../../assets/baseImage.jpg');

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={img}
            />
            <Text style={styles.title}>{props.route.params.Name}</Text>
            <Text style={styles.phone}>聯絡人：{props.route.params.ContactPerson}</Text>
            <Text style={styles.phone}>電話：{props.route.params.TelDisplay}</Text>
            <Text style={styles.address}>地址：{props.route.params.AddrDisplay}</Text>
            <Text style={styles.text}>{props.route.params.Content}</Text>
        </ScrollView>
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
    phone: {
        marginBottom: 15,
        fontSize: 20,
    },
    address: {
        marginBottom: 15,
        fontSize: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 22
    }
});
