import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DogDetail(props) {
    return (
        <View style={styles.container}>
            <Text>這是DogDetail頁</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('DogCategory', {
                            title: '柴犬',
                            img: 'https://cdn.hk01.com/di/media/images/cis/5e4270c8a5e2c82bd6096139.jpg/KNyBGtInTJ6vNZG50MWr4YRe57jWFOUilG8xy5RvMcs?v=w1920'
                        })
                    }}
                >
                    <Text style={styles.text}>柴犬</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('DogCategory', {
                            title: '臘腸狗',
                            img: 'https://teepr.com/wp-content/uploads/2014/08/desktop-1409082578.png'
                        })
                    }}
                >
                    <Text style={styles.text}>臘腸狗</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('DogCategory', {
                            title: '法鬥',
                            img: 'https://img.ltn.com.tw/Upload/partner/page/2019/11/24/191124-5839-01-LTDc7.jpg'
                        })
                    }}
                >
                    <Text style={styles.text}>法鬥</Text>
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