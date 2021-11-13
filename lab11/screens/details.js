/**
 * Creates the details screen for monopoly database app.
 *
 * @author: Brian Langejans
 */

import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

/**
 * Creates a details screen for monopoly players.
 *
 * @return A view with the details for a monopoly player.
 * @param {route, navigation} route makes sure navigation is correct for getting to the screen.
 */
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