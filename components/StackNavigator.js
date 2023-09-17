import * as React from "react";
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";
import DetailsScreen from "./DetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';

// Her instantieres StackNavigator
const Stack = createStackNavigator()

// I return() har jeg placeret komponenten Stack.Navigator. Denne henvis til DetailsScreen i 'initialRouteName'. 
// Herudover er tre screens fastlagt til Stacken, hvilket er DetailsScreen, ScreenOne og ScreenTwo. Disse har forskellige stylings.
function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Details"
        >
            <Stack.Screen name="Details" component={DetailsScreen}
                          options={{
                              headerTitleAlign: 'center',
                              headerTitleStyle: {color: 'white'},
                              headerStyle: {backgroundColor: '#ba6262'}}
                          }
            />
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#628bba'}
            }}
            />
        </Stack.Navigator>
    )
}

// Her kommer eksport af den funktionelle komponent, så den kan importeres i andre komponenter
export default StackNavigator
