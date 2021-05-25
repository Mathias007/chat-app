import React from "react";
import AppLoading from "expo-app-loading";

import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function FormField({
    label,
    value,
    secureTextEntry,
    onChangeText,
    textContentType,
    rightIcon,
}) {
    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <Input
            label={label}
            value={value}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
            onChangeText={onChangeText}
            textContentType={textContentType}
            rightIcon={rightIcon ? rightIcon : null}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            labelStyle={styles.label}
            rightIconContainerStyle={styles.inputRightIconContainer}
        />
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        alignItems: "center",
        borderBottomColor: "transparent",
    },
    input: {
        position: "relative",
        marginHorizontal: 0,
        paddingHorizontal: 16,
        borderWidth: 0,
        borderRadius: 10,
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        backgroundColor: "#FFF",
    },
    inputRightIcon: {
        position: "absolute",
        right: 10,
        color: "#BFC1CC",
    },
    inputRightIconContainer: {
        position: "absolute",
        right: 10,
        color: "#BFC1CC",
    },
    label: {
        paddingBottom: 4,
        color: "#F0F8FF",
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        lineHeight: 24,
    },
});
