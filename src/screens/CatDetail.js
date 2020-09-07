import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CatDetail(props) {
    return (
        <View style={styles.container}>
            <Text>這是CatDetail頁</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('CatCategory', {
                            title: '橘貓',
                            img: 'https://www.arfarf.tw/wp-content/uploads/%E6%A9%98%E8%B2%933.jpg'
                        })
                    }}
                >
                    <Text style={styles.text}>橘貓</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('CatCategory', {
                            title: '虎斑貓',
                            img: 'https://attach.setn.com/newsimages/2019/03/14/1824861-XXL.jpg'
                        })
                    }}
                >
                    <Text style={styles.text}>虎斑貓</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        props.navigation.push('CatCategory', {
                            title: '短毛貓',
                            img: 'https://cdn.hk01.com/di/media/images/20200316/316258422439940096.jpeg/h023Cu8y2RVcggu7aPLQvoacpNIUqBuCjYAGM42ABjM?v=w1920'
                        })
                    }}
                >
                    <Text style={styles.text}>短毛貓</Text>
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