import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import QuestionPage from './pages/questionPage/QuestionPage';
import ResearchPage from './pages/researchPage/ResearchPage'

const Stack = createStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pesquisa">
                <Stack.Screen name="Questionário" component={QuestionPage} />
                <Stack.Screen name="Pesquisa" component={ResearchPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
