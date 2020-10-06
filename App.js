import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home.js';
import HomeDetail from './src/screens/HomeDetail.js';
import HomeList from './src/screens/HomeList.js';
import Favorite from './src/screens/Favorite.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: '來到農村住一晚' }}
      />
      <Stack.Screen
        name="HomeList"
        component={HomeList}
        options={{ title: '農村列表' }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{ title: '農村' }}
      />
    </Stack.Navigator>
  );
}

function MyFavorite() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ title: '我的最愛' }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{ title: '農村' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MyHome}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list-box" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={MyFavorite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
