/* CS 262 lab05 home.js
 * Brian Langejans
 * 10/1/2021*/

import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

    /* Hardcode a "database"/list of movies. */
    const [reviews, setReviews] = useState([
        { title: "Fellowship of the Ring", rating: 8.8, key: '1',
            description: "Some hobbits begin a quest."},
        { title: "Two Towers", rating: 8.7, key: '2',
            description: 'Some dark lords try to take over the world.'},
        { title: "Return of the King", rating: 8.9, key: '3',
            description: 'The dark lords are defeated, to much rejoicing.'},
        { title: "The Super Mario Bros. Movie", rating: 4.1, key: '4',
            description: 'Chris Pratt plays Mario in an adventure to save the Mushroom Kingdom.'},
        { title: "The Martian", rating: 8.3, key: '5',
            description: 'A botonist is stuck on Mars and must grow potatoes to survive.'},
    ]);

    return (
        <View style={globalStyles.container}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            <FlatList data={reviews} renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style={globalStyles.title}>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}