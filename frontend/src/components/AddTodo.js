import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";


export const AddTodo = props => {
    const [textValue, setTextValue] = useState('')

    const pressHandler = () => {
        if(textValue.trim()) {
            props.onSubmit(textValue);
            setTextValue('');
        } else {
            Alert.alert('Your task name cannot be empty')
        }
    }


    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={text => setTextValue(text)}
            value={textValue}
            placeholder='Type your todo task'
            autoCorrect={false}
            autoCapitalize='none'
            />
            <Button title='Add' onPress={pressHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width:'70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})