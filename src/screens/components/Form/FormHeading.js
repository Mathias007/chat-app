import React from "react";
import AppLoading from "expo-app-loading";

import { Text, StyleSheet } from "react-native";

import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function FormHeading({ titleText, subitleText }) {
    let [fontsLoadeed] = useFonts({
        Poppins_700Bold,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <>
            <Text style={styles.header}>{titleText}</Text>
            {subitleText ? (
                <Text style={styles.subheader}>{subitleText}</Text>
            ) : null}
        </>
    );
}

const styles = StyleSheet.create({
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
});
