/* CS 262 homework2 details.js
 * Brian Langejans
 * 10/14/2021*/

import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text style={globalStyles.email}>{ route.params.email }</Text>
            <Text>ID: { route.params.id }</Text>
            <Text>AKA: { route.params.name }</Text>
        </View>
    );
}