import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('pressed', todo.id)}>
            <View>
                <Text style={styles.todo}>
                    {props.todo.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
});