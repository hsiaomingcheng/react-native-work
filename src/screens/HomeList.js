import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { updateFavorite } from '../redux/action';

export default function HomeList(props) {

    // 從store取回來的我的最愛列表
    const favoriteList = useMappedState(state => state.favoriteList);

    // 發送action更新我的最愛列表
    const dispatch = useDispatch();

    // 進入詳細頁
    function handlePress(e) {
        props.navigation.push('HomeDetail', e.item);
    }

    function handleCheckbox(id) {
        // 檢查id是否已經存在
        // 若已存在 = 取消 加入我的最愛
        // 若不存在 = 新增 加入我的最愛

        // 檢查id是否已經存在，如果存在就返還陣列對應的index位置，不存在就返還-1
        const foundIndex = favoriteList.findIndex(e => e === id);

        if (foundIndex === -1) {
            // 新增
            dispatch(updateFavorite([...favoriteList, id]));
        } else {
            // 取消
            favoriteList.splice(foundIndex, 1);
            dispatch(updateFavorite([...favoriteList]));
        }
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
                    <TouchableOpacity onPress={() => handleCheckbox(item.ID)}>
                        <Image
                            style={styles.checkBox}
                            source={checkboxImage}
                        />
                    </TouchableOpacity>

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
                data={props.route.params}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.ID.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
