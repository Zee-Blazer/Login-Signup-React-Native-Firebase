import React, { useState } from 'react';

import { TextInput , Button} from 'react-native-paper';

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

import { Text } from 'react-native';

import { SafeAir } from '../Components/safe-area-component';

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( res => console.log(res) )
        .catch( err => alert(err.message) );
        navigation.navigate('Home')
    }

    return (
        <SafeAir>
            <Text>The Login Screen</Text>

            <TextInput label="Email" value={ email } onChangeText={ setEmail } />
            <TextInput label="Password" value={ password } onChangeText={ setPassword } secureTextEntry />

            <Button onPress={ () => Login(email, password) } >Login</Button>
            <Button onPress={ () => navigation.navigate('Signup') } >SignUp</Button>

        </SafeAir>
    )
}