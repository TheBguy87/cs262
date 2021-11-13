/**
 * Creates the home screen for monopoly database app.
 *
 * @author: Brian Langejans
 */

import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';

/**
 * homeScreen is the main screen of the monopoly database app.
 * @param {navigation} navigation makes sure navigation is correct for getting to the screen.
 */
export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    /**
     * useEffect enables the use of the correct database.
     */
    useEffect(() => {
        fetch('https://cs262-monopoly-service.herokuapp.com/players/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList 
                    data={data}
                    keyExtractor={({ id }, index)=> id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                            <Text style={globalStyles.email}>{ item.email }</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}