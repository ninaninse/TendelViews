import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";


function ProfileScreen () {

    const auth = getAuth();
    const user = auth.currentUser
    // Her ses handleLogout, hvilket håndterer log ud af en af de aktive brugere.
    // Denne metode er en prædefineret metode igen, som firebase har stillet til rådighed. Samt er denne metode et aynkrontkald.
    const handleLogOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    };

    // Dette er med til at fremfinde en aktiv brugere, hvis brugeren ikke kan findes. Her udprintes en besked via en tekstkomponent.
    if (!auth.currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    // I dette return() udnyttes den prædefinerede metode, som tidligere benævnt fra firebase 
    // Her gør metoden, at der returneres en mailadresse af den aktive bruger. Mailadressen bliver herved udskrevet via en tekskomponent
    return (
        <View style={styles.container} >
            <Text>Current user: {user.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log out" />
        </View>
    );

}

// Her ses den okale styling til brug i ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

// Her kommer eksport af Loginform, så den kan importeres og bruges i andre komponenter
export default ProfileScreen