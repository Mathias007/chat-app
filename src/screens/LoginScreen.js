import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import FormHeading from "./components/Form/FormHeading";
import FormField from "./components/Form/FormField";
import FormError from "./components/Form/FormError";
import FormButton from "./components/Form/FormButton";

import Icon from "react-native-vector-icons/FontAwesome";

import { LOGIN_USER } from "../graphql/loginUser.mutation";
import { useMutation } from "@apollo/client";

import { USER_MAIL, USER_PASS } from "@env";

import { screens } from "../config/screens";

const { ROOMS } = screens;

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = useState(USER_MAIL);
    const [password, onChangePassword] = useState(USER_PASS);
    const [error, setError] = useState(null);
    const [isSecret, setSecret] = useState(true);

    const [loginUser, { data }] = useMutation(LOGIN_USER);

    function onLoginFormSubmit() {
        loginUser({
            variables: {
                email,
                password,
            },
        })
            .then((res) => {
                console.log(res);
                navigation.navigate(ROOMS);
            })
            .catch((err) => {
                setError("Sorry, email or password aren't correct. Try again!");
            });
    }

    function handlePasswordVisibility() {
        setSecret(!isSecret);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FormHeading
                titleText="Welcome Back"
                subitleText="Log in and stay in touch with everyone!"
            />

            <View>
                <FormField
                    label="e-mail address"
                    value={email}
                    onChangeText={onChangeEmail}
                    textContentType="emailAddress"
                />

                <FormField
                    label="password"
                    value={password}
                    secureTextEntry={isSecret}
                    onChangeText={onChangePassword}
                    textContentType="password"
                    rightIcon={
                        <Icon
                            name={isSecret ? "eye-slash" : "eye"}
                            onPress={handlePasswordVisibility}
                        />
                    }
                />

                <FormError error={error} />

                <FormButton title="Log in" onPress={onLoginFormSubmit} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        height: "100%",
        padding: 10,
        backgroundColor: "#B6DEFD",
    },
});
