import React from "react";
import AppLoading from "expo-app-loading";

import { Text, StyleSheet } from "react-native";

import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function FormError({ error }) {
    let [fontsLoadeed] = useFonts({
        Poppins_500Medium,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "#F0F8FF",
        fontFamily: "Poppins_500Medium",
    },
});
