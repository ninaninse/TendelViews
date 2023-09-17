import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

// Denne metode er med til at navigere de argumenter, som bliver send med. 
// Logikken bag er at udnytte den prædefinerede metode i form af 'navigate'. Den er med til at navigere til komponentet der hænger smamen med rutenavnet. 
const navController = (navigation, route) =>{
    navigation.navigate(route)
}

// Her tages 'navigation' som argument. Navigation er en prædefineret prop. Den kan refere til alle komponenterne.
// Yderligere indeholder denne fil to knapper, som bliver benyttet til at aktivere navController metoden. 
function DetailsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Overview</Text>
            <Button title="Find partner" onPress={() => navController(navigation, 'ScreenOne')}  />
            <Button title="Profile" onPress={() => navController(navigation, 'ScreenTwo')}  />
        </View>
    );
}

export default DetailsScreen


// Her ses lokal styling til brug i DetailsScreen.
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'pink',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});