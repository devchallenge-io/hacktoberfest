import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './pages/StartPage';
import QuestionPage from './pages/QuestionPage';
import PointsPage from './pages/PointsPage';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='StartPage' component={StartPage} />
                <Screen name='QuestionPage' component={QuestionPage} />
                <Screen name='PointsPage' component={PointsPage} />
            </Navigator>
        </NavigationContainer>
    );
}