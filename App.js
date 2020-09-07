import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import DogDetail from './src/screens/DogDetail';
import DogCategory from './src/screens/DogCategory';
import CatDetail from './src/screens/CatDetail';
import CatCategory from './src/screens/CatCategory';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHome() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='DogDetail' component={DogDetail} />
      <Stack.Screen name='CatDetail' component={CatDetail} />
      <Stack.Screen name='DogCategory' component={DogCategory} />
      <Stack.Screen name='CatCategory' component={CatCategory} />
    </Stack.Navigator>
  );
}

function MyDog() {
  return (
    <Stack.Navigator
      initialRouteName='DogDetail'
    >
      <Stack.Screen name='DogDetail' component={DogDetail} />
      <Stack.Screen name='DogCategory' component={DogCategory} />
    </Stack.Navigator>
  );
}

function MyCat() {
  return (
    <Stack.Navigator
      initialRouteName='CatDetail'
    >
      <Stack.Screen name='CatDetail' component={CatDetail} />
      <Stack.Screen name='CatCategory' component={CatCategory} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={MyHome} />
        <Tab.Screen name='DogDetail' component={MyDog} />
        <Tab.Screen name='CatDetail' component={MyCat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
