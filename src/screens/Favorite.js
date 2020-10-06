import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';

export default function Favorite(props) {
    const [favoriteList, setFavoriteList] = useState();
    const [farmData, setFarmData] = useState();

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getLocalStorage();
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        // call 休閒農場住宿資訊 api
        fetchFarmData();
    }, []);

    const getLocalStorage = async () => {
        const getList = await StorageHelper.getFavoriteList('favoriteList');

        if (getList) {
            console.log('JSON.parse(getList)', JSON.parse(getList));
            setFavoriteList(JSON.parse(getList));
        }
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

    let list = [];

    (favoriteList && farmData) && favoriteList.forEach(element => {
        const data = farmData.find(e => e.ID === element);
        list.push(data);
    });

    // 進入詳細頁
    function handlePress(e) {
        props.navigation.push('HomeDetail', e.item);
    }

    /**
     * 列表的每個選項
     */
    function renderItem({ item }) {
        // 判斷取得的該筆資料的Image是否有值，沒有的話就使用預設圖片
        const img = item.Image ?
            { uri: item.Image }
            :
            require('../../assets/baseImage.jpg');

        // 預設選取方塊圖片
        let checkboxImage = require('../../assets/square_non_check.png');

        // 判斷ID是否已存在於favoriteList陣列，若已存在代表是'已加入'我的最愛狀態，所以使用勾選圖片
        favoriteList && favoriteList.find(e => {
            if (e === item.ID) {
                checkboxImage = require('../../assets/square_check.png');
            }
        });

        return (
            <>
                <View style={styles.listContainer}>
                    <TouchableOpacity onPress={() => handlePress({ item })}>
                        <View style={styles.item}>
                            <Image
                                style={styles.image}
                                source={img}
                            />

                            <View>
                                <Text style={styles.title}>{item.Name}</Text>
                                <Text ellipsizeMode="tail" numberOfLines={3}>{item.AddrDisplay}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.seperator} />
            </>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.ID.toString()}
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
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBox: {
        flex: 0,
        width: 40,
        height: 40
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10
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
