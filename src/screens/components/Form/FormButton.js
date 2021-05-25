import React from "react";
import AppLoading from "expo-app-loading";

import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function FormButton({ title, onPress }) {
    let [fontsLoadeed] = useFonts({
        Poppins_600SemiBold,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <Button title={title} onPress={onPress} buttonStyle={styles.button} />
    );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        marginHorizontal: 32,
        paddingVertical: 16,
        paddingHorizontal: 88,
        borderRadius: 10,
        color: "#FFF",
        fontSize: 19,
        lineHeight: 28.5,
        fontFamily: "Poppins_600SemiBold",
        backgroundColor: "#5603AD",
    },
});
