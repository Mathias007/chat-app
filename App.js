import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ChatRoomScreen from "./src/screens/ChatRoomScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RoomsListScreen from "./src/screens/RoomsListScreen";

import { screens } from "./src/config/screens";

const { LOGIN, REGISTER, ROOMS, CHAT } = screens;

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={LOGIN}>
                <Screen
                    name={LOGIN}
                    component={LoginScreen}
                    options={{ title: LOGIN, headerShown: false }}
                />
                <Screen
                    name={REGISTER}
                    component={RegisterScreen}
                    options={{ title: REGISTER, headerShown: false }}
                />
                <Screen
                    name={ROOMS}
                    component={RoomsListScreen}
                    options={{ title: ROOMS, headerShown: false }}
                />
                <Screen
                    name={CHAT}
                    component={ChatRoomScreen}
                    options={{ title: CHAT, headerShown: false }}
                />
            </Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
