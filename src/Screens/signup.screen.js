import React, { useState } from 'react';

import { TextInput, Button } from 'react-native-paper';

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

import { Text } from 'react-native';

import { SafeAir } from '../Components/safe-area-component';

export const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const SignUp = (email, pwd) => {
        if(pwd === confirmPwd) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then( res => console.log(res) )
            .catch( err => alert(err.message) );
            navigation.navigate("Home");
        }
        else{
            alert("Password Mismatch")
        }
    }

    return (
        <SafeAir>
            <Text>The SignUp Screen</Text>

            <TextInput label="Email" value={ email } onChangeText={ setEmail } />
            <TextInput label="Password" value={ pwd } onChangeText={ setPwd } secureTextEntry />
            <TextInput label="Confirm Password" value={ confirmPwd } onChangeText={ setConfirmPwd } secureTextEntry />

            <Button onPress={ () => SignUp(email, pwd) }>Sign up</Button>
            <Button onPress={ () => navigation.navigate('Login') }>Login</Button>

        </SafeAir>
    )
}