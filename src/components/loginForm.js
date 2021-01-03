import React, {useState} from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logger } from 'react-native-logs';

let log = logger.createLogger();


export default function LoginForm ({navigation}) {

    const initialState = {email: '', password: ''}

    const [state, setState] = useState(initialState);

    return (
        <View>
            <View style={styles.View}>
                <Text>Enter your email:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Your email'
                    value={state.email}
                    onChangeText={(text) => setState({...state, email: text})}
                />
            </View>
            <View style={styles.View}>
                <Text>Enter your password:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Your password'
                    value={state.password}
                    onChangeText={(text) => setState({...state, password: text})}
                />
            </View>
            
            <TouchableOpacity
                onPress={() => {
                    return navigation.navigate('Home')
                }}
                style={styles.Button}
            >
                <Text style={styles.ButtonText}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    View: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 30,
    },
    Input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
    },
    Button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        height: 40,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: 50,
    },
    ButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
};