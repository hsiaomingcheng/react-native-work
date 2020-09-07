import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeDetailScreen() {
    return (
        <View style={styles.container}>
            <Text>這裡是HomeDetailScreen</Text>
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
