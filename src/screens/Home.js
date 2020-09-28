import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const cityData = [
    {
        id: '0',
        city: '宜蘭縣'
    },
    {
        id: '1',
        city: '花蓮縣'
    },
    {
        id: '2',
        city: '金門縣'
    },
    {
        id: '3',
        city: '南投縣'
    },
    {
        id: '4',
        city: '屏東縣'
    },
    {
        id: '5',
        city: '苗栗縣'
    },
    {
        id: '6',
        city: '雲林縣'
    },
    {
        id: '7',
        city: '新北市'
    },
    {
        id: '8',
        city: '新竹縣'
    },
    {
        id: '9',
        city: '嘉義縣'
    },
    {
        id: '10',
        city: '臺中市'
    },
    {
        id: '11',
        city: '澎湖縣'
    },
    {
        id: '12',
        city: '臺南市'
    },
    {
        id: '13',
        city: '臺東縣'
    }
];

const image = require('../../assets/farm.jpg');

export default function Home(props) {

    useEffect(() => {
        // call 休閒農場住宿資訊 api
        fetchFarmData();
    }, []);

    const [farmData, setFarmData] = useState();

    function handleSelectCity(e) {
        // 篩選所選城市的休閒農場住宿資訊

        const result = farmData.filter(item => item.CountyName === e);

        props.navigation.push('HomeList', result);
    }

    function fetchFarmData() {
        // 休閒農場住宿資訊 api
        const requestUrl = 'https://ezgo.coa.gov.tw/API/FarmStay?lang=zh-TW';

        fetch(requestUrl, { method: 'GET' })
            .then((response) => response.json())
            .then((responseData) => {
                setFarmData(responseData);
            })
            .catch((error) => {
                console.log('error', error);
            });;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.title}>請選擇縣市</Text>

                {farmData && <View style={styles.cityContainer}>
                    {
                        cityData.map((item) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => handleSelectCity(item.city)}
                                >
                                    <Text style={styles.cityButton}>{item.city}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cityContainer: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cityButton: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 80,
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
        overflow: 'hidden'
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    }
});
