import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home.js';
import HomeDetail from './src/screens/HomeDetail.js';
import HomeList from './src/screens/HomeList.js';

//for redux
import configureStore from './src/redux/store';
import { StoreContext } from 'redux-react-hook';

const store = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreContext.Provider value={store}>
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
    </StoreContext.Provider>
  );
}
