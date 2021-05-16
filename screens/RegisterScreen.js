import React, { useState } from "react";
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

export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = useState(null);
    const [firstName, onChangeFirstName] = useState(null);
    const [lastName, onChangeLastName] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [passwordConfirm, onChangePasswordConfirm] = useState(null);

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create Account</Text>
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
                    label="first name"
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    textContentType="name"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                />
                <Input
                    label="last name"
                    value={lastName}
                    onChangeText={onChangeLastName}
                    textContentType="familyName"
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
                <Input
                    label="password confirmation"
                    value={passwordConfirm}
                    secureTextEntry={false}
                    onChangeText={onChangePasswordConfirm}
                    textContentType="password"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    labelStyle={styles.label}
                    rightIcon={<Icon name="eye-slash" />}
                    rightIconContainerStyle={styles.inputRightIcon}
                />
                <Button
                    title="Register"
                    onPress={() => navigation.navigate("Chat")}
                    buttonStyle={styles.button}
                />
                <Text style={styles.privacy}>
                    By clicking sign up button you agree with the terms and
                    conditions and the privacy policy.
                </Text>
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
    },
    header: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 36,
        lineHeight: 54,
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        borderBottomColor: "transparent",
    },
    input: {
        position: "relative",
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
    privacy: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center",
        color: "#FFF",
        marginBottom: 32,
    },
});
