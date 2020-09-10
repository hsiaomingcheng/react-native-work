import { AsyncStorage } from 'react-native';

/**
 * 參數型態註解
 * {string} name
 * {bool} isLogin
 */

//存入
// AsyncStorage.setItem(key, value);
export const setUserName = (key, value) => AsyncStorage.setItem(key, value);

//讀取
// AsyncStorage.getItem(key);
export const getUserName = (key) => AsyncStorage.getItem(key);
