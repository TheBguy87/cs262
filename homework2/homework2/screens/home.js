/* CS 262 homework2 home.js
 * Brian Langejans
 * 10/14/2021*/

import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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