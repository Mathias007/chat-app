import React from "react";
import AppLoading from "expo-app-loading";
import TimeAgo from "react-native-timeago";

import { Text, StyleSheet } from "react-native";

import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function RoomMeta({ date }) {
    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <Text style={styles.roomMeta}>
            <TimeAgo time={date} />
        </Text>
    );
}

const styles = StyleSheet.create({
    roomMeta: {
        position: "absolute",
        top: 10,
        right: 10,
        color: "#9FA2B2",
        fontFamily: "Poppins_400Regular",
        fontSize: 10,
        lineHeight: 12,
    },
});
