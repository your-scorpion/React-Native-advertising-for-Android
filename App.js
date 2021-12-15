import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={
          {
            title: "Final Adv 🛍",
            headerStyle: {
            backgroundColor: '#4BE189',},
            headerTintColor: 'black',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }
        }>
      <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            headerStyle: {
            backgroundColor: '#4BE189',},
            headerTintColor: 'black',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }}
        />
      <Stack.Screen
            name="How about this one?"
            component={DetailsScreen}
            options={ ( {route}) => ({title: route.params.json.title})}
        />
      <Stack.Screen
            name="Crossroads"
            component={DetailsScreen}
            options={ ( {route}) => ({title: route.params.json.title})}
        />
      <Stack.Screen
            name="BigImageView"
            component={ImageScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
