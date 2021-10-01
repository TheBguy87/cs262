/* CS 262 lab05 about.js
 * Brian Langejans
 * 10/1/2021*/

 import React, { useState } from 'react';
 import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
 import { globalStyles } from '../styles/global';
 
 export default function AboutScreen({ route, navigation }) {
 
     return (
         <View style={globalStyles.container}>
             {/* Display the about information of the app */}
             <Text>{ "This application lists movies and movie reviews." }</Text>
         </View>
     );
 }