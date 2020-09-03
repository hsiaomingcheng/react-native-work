import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [times, setTimes] = useState(0);
  const [id, setId] = useState(0);

  const handlePressPlus = () => {
    setTimes(times + 1);
  }

  const handlePressReset = () => {
    setTimes(0);
  }

  const handlePressImage = (e) => {
    setId(e);
  }

  return (
    <View style={styles.container}>
      <Text>您已經按了按鈕幾次：{times}次</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePressPlus()}
      >
        <Text>+1次</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePressReset()}
      >
        <Text>歸0</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePressImage(1)}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-tenet-5k-m6-5120x2880-1597913907.jpg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePressImage(2)}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/incepteion-sequel-tenet-1576780446.jpg?crop=0.495xw:0.990xh;0.505xw,0&resize=480:*',
          }}
        />
      </TouchableOpacity>

      {
        id === 1 && <View>
          <Text style={styles.title}>羅伯·派汀森</Text>
          <Text>羅伯·道格拉斯·湯瑪士·派汀森是一位英國男演員、模特兒、音樂人及電影製片人。 羅伯因演出2005年電影《哈利波特－火盃的考驗》中的西追·迪戈里一角而開展他的銀色事業。</Text>
        </View>
      }
      {
        id === 2 && <View>
          <Text style={styles.title}>約翰·大衛·華盛頓</Text>
          <Text>約翰·大衛·華盛頓是一名美國男演員和前美式足球跑衛。他在2006年NFL選秀中被選中後，華盛頓於2006年5月1日被聖路易公羊簽下，成為一名非經選秀的自由球員。之後於2009年8月中旬被沙加緬度山獅簽下；華盛頓於2012年10月退出美式足球界。 之後，華盛頓跟隨父親丹佐·華盛頓及母親普萊塔·華盛頓的腳步進入演藝界。</Text>
        </View>
      }
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
    width: 100,
    height: 100
  },
  button: {
    backgroundColor: 'gray',
    width: 100,
    height: 100
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: 'red'
  }
});
