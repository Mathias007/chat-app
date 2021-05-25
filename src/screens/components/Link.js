import React from "react";
import AppLoading from "expo-app-loading";
import { Linking, Text, StyleSheet } from "react-native";

import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function Link(props) {
    const { url, text } = props;

    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
    });

    const handleLink = (url) => {
        Linking.openURL(url);
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Text style={styles.link} onPress={() => handleLink(url)}>
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    link: {
        fontFamily: "Poppins_700Bold",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color: "#259DFA",
    },
});
