import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import ResearchPage from './pages/researchPage/ResearchPage'

const Routes = () => {
    const Stack = createStackNavigator();
    return (
        <View>
            <Text>Routes</Text>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={ResearchPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Routes
