import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home.js';
import HomeDetail from './src/screens/HomeDetail.js';
import HomeList from './src/screens/HomeList.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
