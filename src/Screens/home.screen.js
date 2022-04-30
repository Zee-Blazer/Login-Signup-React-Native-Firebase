
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

import { Text } from 'react-native';

import { SafeAir } from '../Components/safe-area-component';

export const HomeScreen = ({ navigation }) => {

    firebase.auth().onAuthStateChanged( user => {
        if(user != null) {
            alert("You are logged In")
        }
        else{
            navigation.navigate('Login');
        }
    } )

    const SignOut = () => {
        firebase.auth().signOut()
        .then( res => navigation.navigate("Login"))
        .catch( err => alert(err.message) );
    }

    return (
        <SafeAir>
            <Text>The Home Screen</Text>
            <Text onPress={ () => SignOut() }>Sign Out</Text>
        </SafeAir>
    )
}