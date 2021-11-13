/* CS 262 homework2 about.js
 * Brian Langejans
 * 10/14/2021*/

 import React, { useState } from 'react';
 import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
 import { globalStyles } from '../styles/global';
 
 export default function AboutScreen({ route, navigation }) {
 
     return (
         <View style={globalStyles.container}>
             {/* Display the about information of the app */}
             <Text>{ "This application accesses information on monopoly players." }</Text>
         </View>
     );
 }