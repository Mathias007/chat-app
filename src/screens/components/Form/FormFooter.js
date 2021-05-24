import React from "react";
import AppLoading from "expo-app-loading";
import { Text, StyleSheet } from "react-native";

import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function FormFooter() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Text style={styles.privacy}>
            By clicking sign up button you agree with the terms and conditions
            and the privacy policy.
        </Text>
    );
}

const styles = StyleSheet.create({
    privacy: {
        fontFamily: "Poppins_400Regular",
        fontSize: 12,
        lineHeight: 16,
        textAlign: "center",
        color: "#FFF",
        marginBottom: 32,
    },
});
