import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function CatCategory(props) {
    return (
        <View style={styles.container}>
            <Text>這是CatCategory，您選了{props.route.params.title}</Text>
            <Image
                style={styles.image}
                source={{
                    uri: props.route.params.img
                }}
            />
            <Button
                title="回到首頁"
                onPress={() => props.navigation.pop('2')}
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
    image: {
        width: 150,
        height: 150
    }
});