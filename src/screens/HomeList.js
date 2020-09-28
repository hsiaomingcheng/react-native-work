import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function HomeList(props) {

    function handlePress(e) {
        props.navigation.push('HomeDetail', e.item);
    }

    function renderItem({ item }) {
        const img = item.Image ?
            { uri: item.Image }
            :
            require('../../assets/baseImage.jpg');

        return (
            <TouchableOpacity onPress={() => handlePress({ item })}>
                <View style={styles.item}>
                    <Image
                        style={styles.image}
                        source={img}
                    />

                    <View style={styles.content}>
                        <Text style={styles.title}>{item.Name}</Text>
                        <Text ellipsizeMode="tail" numberOfLines={3}>{item.AddrDisplay}</Text>
                    </View>
                </View>

                <View style={styles.seperator} />
            </TouchableOpacity>
        );
    }

    // console.log('props.route.params', props.route.params);

    return (
        <View style={styles.container}>
            <FlatList
                data={props.route.params}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => (item.ID).toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    image: {
        flex: 0,
        width: 80,
        height: 80,
        marginRight: 10
    },
    content: {
        flex: 1,
    },
    title: {
        marginBottom: 5,
        fontSize: 18
    },
    seperator: {
        height: 1,
        backgroundColor: '#DDD'
    }
});
