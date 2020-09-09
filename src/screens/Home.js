import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const DATA = [
    {
        id: '0',
        title: '羅伯·派汀森',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/british-actor-robert-pattinson-arrives-to-attend-the-11th-news-photo-1599447993.jpg?crop=0.734xw:1.00xh;0.134xw,0&resize=640:*',
        text: '羅伯·道格拉斯·湯瑪士·派汀森是一位英國男演員、模特兒、音樂人及電影製片人。 羅伯因演出2005年電影《哈利波特－火盃的考驗》中的西追·迪戈里一角而開展他的銀色事業。'
    },
    {
        id: '1',
        title: '伊莉莎白·戴比基',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2nncl-1598793775.jpg?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
        text: '伊莉莎白·戴比基是一位澳大利亞女演員。2011年首度演出電影《伴郎我最High》，其後她在2013年電影《大亨小傳》的演出為她贏得澳洲電影及電視美藝學院獎最佳女配角。'
    },
    {
        id: '2',
        title: '約翰·大衛·華盛頓',
        img: 'https://puui.qpic.cn/media_img/0/4413981566558282/0',
        text: '約翰·大衛·華盛頓是一名美國男演員和前美式足球跑衛。他在2006年NFL選秀中被選中後，華盛頓於2006年5月1日被聖路易公羊簽下，成為一名非經選秀的自由球員。之後於2009年8月中旬被沙加緬度山獅簽下；華盛頓於2012年10月退出美式足球界。 之後，華盛頓跟隨父親丹佐·華盛頓及母親普萊塔·華盛頓的腳步進入演藝界。 '
    },
    {
        id: '3',
        title: '克蕾曼絲·波西',
        img: 'https://www.grazia.it/content/uploads/2012/03/Clemence-Poesy.jpg',
        text: '克蕾曼絲·波西，法國女演員和時尚模特兒。她從舞台劇的童星出身，畢業於戲劇學系，1999年踏入電視和電影界。她的著名角色包括《哈利波特—火盃的考驗》和《哈利波特—死神的聖物》1、2集中的花兒·戴樂古，《殺手沒有假期》中的柯兒，以及《127小時》中的拉娜。她也曾在《花邊教主》中演出伊娃·古柏一角。'
    },
    {
        id: '4',
        title: '希姆許·帕托',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Himesh_Patel_2019_%28cropped%29.jpg',
        text: '希姆許·吉坦德拉·帕托是一名英國男演員和歌手。他以在BBC肥皂劇《東區人》中飾演的塔姆瓦爾·馬蘇德一角而聞名，並因在丹尼·鮑伊電影《靠譜歌王》中首度擔綱主演而提升了知名度。'
    },
    {
        id: '5',
        title: '蒂普·卡柏迪亞',
        img: 'https://m.media-amazon.com/images/M/MV5BNTc4MTE1NDU5MF5BMl5BanBnXkFtZTcwNDI2MTcxOA@@._V1_.jpg',
        text: '蒂普·卡柏迪亞是印度女演員，主要作品均是寶萊塢電影。她曾兩次獲印度電影觀眾獎的最佳女演員獎項。 1973年，剛剛出道的卡柏迪亞和印度男影星及拉傑殊·坎納結婚。她婚後育有兩名孩子，並退出影壇。1984年，她和坎納分居但一直沒有離婚。'
    },
    {
        id: '6',
        title: '米高·肯恩',
        img: 'https://image6.thenewslens.com/2020/6/vkgs2l694kz9n48jtdhjf2l3j1m4q1.png?auto=compress&q=80&w=500',
        text: '米高·肯恩爵士，CBE是一名英國的知名影星，曾兩度獲得奧斯卡最佳男配角獎，另外在其它三項電影大獎金球獎、英國影藝學院獎和影視演員協會獎都有獲獎紀錄，且主演超過多達百部的電影。 2015年以《年輕氣盛》贏得第28屆歐洲電影獎最佳男主角獎，並被授予歐洲電影獎終身成就獎。'
    },
    {
        id: '7',
        title: '亞倫·強森',
        img: 'https://hips.hearstapps.com/amv-prod-elletw.s3.amazonaws.com/new-dossier/1_483.jpg?resize=480:*',
        text: '亞倫·派瑞·強森，是一名英國男演員，曾經演過舞台劇、電視劇與電影。他從六歲就開始表演並且出現在一些電影裡, 例如《小鬼歷險記》、《皇家威龍》和 《魔幻至尊》之後演出超級英雄電影《特攻聯盟》、《復仇者聯盟2：奧創紀元》。'
    },
    {
        id: '8',
        title: '肯尼斯·布萊納',
        img: 'https://cdn.udn.com/img/960/photo/web/news/20151121/400912_3938467d63d6685b_o.jpg',
        text: '肯尼斯·查爾斯·「肯」·布萊納爵士是一名北愛爾蘭出身的英國男演員、導演、監製和編劇。'
    },
];

export default function Home(props) {

    function handlePress(e) {
        props.navigation.push('HomeDetail', e.item);
    }

    function renderItem({ item }) {
        const image = item.img;

        return (
            <TouchableOpacity onPress={() => handlePress({ item })}>
                <View style={styles.item}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: image,
                        }}
                    />

                    <View style={styles.content}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text ellipsizeMode="tail" numberOfLines={3}>{item.text}</Text>
                    </View>
                </View>

                <View style={styles.seperator} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
