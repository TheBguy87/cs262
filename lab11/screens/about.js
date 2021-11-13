/**
 * Creates the about screen for monopoly database app.
 *
 * @author: Brian Langejans
 */

 import React, { useState } from 'react';
 import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
 import { globalStyles } from '../styles/global';
 
 /**
  * Creates a details screen for monopoly players.
  *
  * @return A view with the about screen for the app
  * @param {route, navigation} route makes sure navigation is correct for getting to the screen.
  */
 export default function AboutScreen({ route, navigation }) {
     return (
         <View style={globalStyles.container}>
             {/* Display the about information of the app */}
             <Text>{ "This application accesses information on monopoly players." }</Text>
         </View>
     );
 }