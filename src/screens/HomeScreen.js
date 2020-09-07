import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    console.log('props', props);
    return (
        <View style={styles.container}>
            <Text>這裡是HomeScreen</Text>
            <Button
                title="點擊進入HomeDetail"
                onPress={() => props.navigation.push('HomeDetailScreen')}
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
    }
});
