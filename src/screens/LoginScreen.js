import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";

import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/FontAwesome";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { LOGIN_USER } from "../graphql/loginUser.mutation";
import { useMutation } from "@apollo/client";

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState("howard@mail.com");
    const [password, onChangePassword] = useState("NBC872$$%mvnM");
    const [error, setError] = useState(null);

    const [loginUser, { data }] = useMutation(LOGIN_USER);

    function onLoginFormSubmit() {
        if ((email, password)) {
            loginUser({
                variables: {
                    email,
                    password,
                },
            })
                .then((res) => {
                    console.log(res);
                    navigation.navigate("Rooms");
                })
                .catch((err) => {
                    setError(
                        "Sorry, email or password aren't correct. Try again!"
                    );
                });
        }
    }

    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Welcome Back</Text>
            <Text style={styles.subheader}>
                Log in and stay in touch with everyone!
            </Text>

            <View>
                <Input
                    value={email}
                    onChangeText={onChangeEmail}
                    textContentType="emailAddress"
                    label="e-mail address"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                />
                <Input
                    label="password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    textContentType="password"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    rightIcon={<Icon name="eye-slash" />}
                    rightIconContainerStyle={{
                        position: "absolute",
                        right: 10,
                        color: "#BFC1CC",
                    }}
                />
                <Text style={styles.error}>{error}</Text>
                <Button
                    title="Log in"
                    onPress={onLoginFormSubmit}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#B6DEFD",
        display: "flex",
        justifyContent: "space-around",
        height: "100%",
    },
    header: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 36,
        lineHeight: 54,
    },
    subheader: {
        paddingRight: 40,
        fontFamily: "Poppins_700Bold",
        fontSize: 22,
        lineHeight: 33,
        color: "#fff",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        borderBottomColor: "transparent",
    },
    input: {
        position: "relative",
        marginVertical: 4,
        marginHorizontal: 0,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 0,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        backgroundColor: "#FFF",
    },
    inputRightIcon: {
        position: "absolute",
        right: 10,
        color: "#BFC1CC",
    },
    label: {
        color: "#F0F8FF",
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        lineHeight: 24,
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 32,
        paddingVertical: 17,
        paddingHorizontal: 88,
        borderRadius: 10,
        color: "#FFF",
        fontSize: 19,
        lineHeight: 28.5,
        fontFamily: "Poppins_600SemiBold",
        backgroundColor: "#5603AD",
    },
    error: {
        textAlign: "center",
        color: "#F0F8FF",
        fontFamily: "Poppins_500Medium",
    },
});
