import React from "react";

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

    return (
        <>
            <Text style={styles.headerTitle}>{title}</Text>
            {subtitle} ? <Text>{subtitle}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 36,
        lineHeight: 54,
        textAlign: "left",
        flex: 1,
    },
    headerSubtitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 18,
    },
});
