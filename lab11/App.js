/**
 * Main monopoly database app file.
 *
 * @author: Brian Langejans
 */

import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from "./screens/about";
import Header from "./shared/header"

const Stack = createNativeStackNavigator();

/**
 * Creates the core navigation and functions for the application to run.
 *
 * @return A stack navigator for navigating the app's pages.
 */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
                <Header navigation={navigation}/>
            )
           })}
          />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
