import React from "react";
import AppLoading from "expo-app-loading";
import { Text, StyleSheet } from "react-native";

import Link from "../Link";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
    privacyPolicyLink,
    termsAndConditionsLink,
} from "../../../config/links";

export default function FormFooter() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Text style={styles.privacy}>
            By clicking sign up button you agree with the
            <Link url={termsAndConditionsLink} text=" terms and conditions " />
            and <Link url={privacyPolicyLink} text=" the privacy policy" />.
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
