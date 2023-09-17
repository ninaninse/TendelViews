import React, { useState} from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function LoginForm() {

    const auth = getAuth();

    // Her forekommer instantiering af statevariabler, hvilket skal benyttes i LoginForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    // Denne metode er med til at håndtere login af en af de eksisterende brugere ved anvendelse af firebases prædefinerede metode. 
    // Der foretages et asynkront kald, hvilket eksekvere login i firebase. signInWithEmailAndPassword tager nemlig en mail og password som argument. 
    // Hvis fejl opstår, så vil der i catch forekomme en fejlsbesked via setErrorMessage. Dette angiver værdien for state-variablen, errormessage.
    const handleSubmit = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in aflæses her
            const user = userCredential.user;
    // Hvis fejl:
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        });
    }

    // Loginknappen defineres her. Denne aktiverer handleSubmit igennem onPress
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" />;
    };

// I dette return bliver der oprettet en tekstkomponent. Denne angiver at dette nemlig er loginfrom
// Herefter forekomemr der to inputfelter. Disse sætter løbende værdien af state-variablerne, mail og password.
// Sidst i processen, så bliver det angivet at, hvis errorMessage får fastsat en værdi, så skal denne udskrives i en tekstkomponent.
    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

// Her kommer lokal styling til brug i LoginFrom
const styles = StyleSheet.create({
    error: {
        color: 'pink',
    },
    inputField: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
        width: 300
    },
    header: {
        fontSize: 20,
    },
});

// Her kommer eksport af Loginform, så den kan importeres og benyttes i andre komponenter
export default LoginForm