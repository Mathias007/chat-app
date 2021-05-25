import React, { useState } from "react";

import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import FormHeading from "./components/Form/FormHeading";
import FormField from "./components/Form/FormField";
import FormError from "./components/Form/FormError";
import FormButton from "./components/Form/FormButton";
import FormFooter from "./components/Form/FormFooter";

import { useMutation } from "@apollo/client";

import Icon from "react-native-vector-icons/FontAwesome";

import { REGISTER_USER } from "../graphql/registerUser.mutation";

import { screens } from "../config/screens";

const { LOGIN } = screens;

export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = useState(null);
    const [firstName, onChangeFirstName] = useState(null);
    const [lastName, onChangeLastName] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [passwordConfirmation, onChangePasswordConfirm] = useState(null);
    const [error, setError] = useState(null);

    const [isSecret, setSecret] = useState(true);
    const [isConfirmSecret, setConfirmSecret] = useState(true);

    const [registerUser, { data }] = useMutation(REGISTER_USER);

    function onRegisterFormSubmit({ navigation }) {
        registerUser({
            variables: {
                email,
                firstName,
                lastName,
                password,
                passwordConfirmation,
            },
        })
            .then((res) => {
                console.log(res);
                navigation.navigate(LOGIN);
            })
            .catch((err) => {
                setError("Uncorrect data. Registration wasn't possible.");
            });
    }

    function handlePasswordVisibility() {
        setSecret(!isSecret);
    }

    function handlePasswordConfirmVisibility() {
        setConfirmSecret(!isConfirmSecret);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FormHeading titleText="Create Account" />

            <View>
                <FormField
                    label="e-mail address"
                    value={email}
                    onChangeText={onChangeEmail}
                    textContentType="emailAddress"
                />

                <FormField
                    label="first name"
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    textContentType="name"
                />

                <FormField
                    label="last name"
                    value={lastName}
                    onChangeText={onChangeLastName}
                    textContentType="familyName"
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

                <FormField
                    label="password confirmation"
                    value={passwordConfirmation}
                    secureTextEntry={isConfirmSecret}
                    onChangeText={onChangePasswordConfirm}
                    textContentType="password"
                    rightIcon={
                        <Icon
                            name={isConfirmSecret ? "eye-slash" : "eye"}
                            onPress={handlePasswordConfirmVisibility}
                        />
                    }
                />

                <FormError error={error} />
                <FormButton title="Sign up" onPress={onRegisterFormSubmit} />

                <FormFooter />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        paddingTop: 50,
        backgroundColor: "#B6DEFD",
    },
});
