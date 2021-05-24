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

export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmail] = useState(null);
    const [firstName, onChangeFirstName] = useState(null);
    const [lastName, onChangeLastName] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [passwordConfirmation, onChangePasswordConfirm] = useState(null);
    const [error, setError] = useState(null);

    const [registerUser, { data }] = useMutation(REGISTER_USER);

    function onRegisterFormSubmit() {
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
                navigation.navigate("Login");
            })
            .catch((err) => {
                setError("Uncorrect data. Registration wasn't possible.");
            });
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
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    textContentType="password"
                    rightIcon={<Icon name="eye-slash" />}
                />

                <FormField
                    label="password confirmation"
                    value={passwordConfirmation}
                    secureTextEntry={true}
                    onChangeText={onChangePasswordConfirm}
                    textContentType="password"
                    rightIcon={<Icon name="eye-slash" />}
                />

                <FormError error={error} />
                <FormButton title="Register" onPress={onRegisterFormSubmit} />

                <FormFooter />
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
});
