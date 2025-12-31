import { useAppSelector } from '@/store/hooks';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../login/Login';
import Home from '../home/Home';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
}

function AppStackScreen() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                options={{ headerShown: false }}
            >
                {props => <Home />}
            </AppStack.Screen>
            {/* Agrega aquí otras screens si es necesario */}
        </AppStack.Navigator>
    );
}

export default function AppNavigator() {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                {!isAuthenticated ? <AppStackScreen /> : <AuthStackScreen />}
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
