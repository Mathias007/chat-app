import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ChatRoomScreen from "./screens/ChatRoomScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RoomsListScreen from "./screens/RoomsListScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Profile">
                <Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: "Login" }}
                />
                <Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: "Register" }}
                />
                <Screen
                    name="Rooms"
                    component={RoomsListScreen}
                    options={{ title: "Rooms" }}
                />
                <Screen
                    name="Chat"
                    component={ChatRoomScreen}
                    options={{ title: "Chat" }}
                />
                <Screen
                    name="Profile"
                    component={UserProfileScreen}
                    options={{ title: "Profile" }}
                />
            </Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
