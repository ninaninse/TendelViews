import React, {useState} from 'react';
import {Button,Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

// Her importeres firebase fra 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
    // Her kommer instantiering af state-variabler, der bliver brugt i SignUpForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    
    const auth = getAuth()
    // Her bliver brugeroprettelsesknappen defineret, som aktiverer handleSubmit igennem onPress
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Create user" />;
    };

// Her håndteres oprettelsen af brugere. Her anvendes en allerede defineret metode fra firebase.
// Her foretages et aynkront kald, der eksekverer en oprettelse af brugeren i firebase. Det er nemlig createUserWithEmailAndPassword, der tager mail og password med som argumenter. 
// Skulle der komme en fejl, så fremkommer en fejlbesked i catch ved anvendelse af setErrorMessage. Dette angiver værdien for state-variablen, errormessage.
      const handleSubmit = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
          // ..
        });
      }

// Her i return oprettes en tekstkomponent. Denne angiver SignUpfrom
// Herefter er der to inputfelter, som sætter værdien af både state-variablerne, mail og password.
// Sidst, hvis errorMessage får fastsat en værdi, så skal denne udskrives i en tekstkomponent.
    return (
        <View>
            <Text style={styles.header}>Sign up</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
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

// Her forekommer lokal styling til brug i SignUpForm
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

// Her kommer eksport af Loginform. Dette er med til, at den kan importeres og benyttes i andre komponenter
export default SignUpForm