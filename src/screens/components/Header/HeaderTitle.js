import React from "react";
import AppLoading from "expo-app-loading";

import { Text, StyleSheet } from "react-native";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function HeaderTitle({ title, subtitle }) {
    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <>
            <Text
                style={subtitle ? styles.headerTitle : styles.aloneHeaderTitle}
            >
                {title}
            </Text>
            <Text style={styles.headerSubtitle}>
                {subtitle ? subtitle : null}
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 16,
        lineHeight: 24,
    },
    aloneHeaderTitle: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 36,
        lineHeight: 54,
        textAlign: "left",
        flex: 1,
    },
    headerSubtitle: {
        color: "#FFF",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 18,
    },
});
