import React from "react";
import AppLoading from "expo-app-loading";
import { Text, View, StyleSheet } from "react-native";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function RoomData({ roomName, roomLastMessage, isRoomActive }) {
    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
    });

    function shortText(text) {
        return `${text.substr(0, 30)} ...`;
    }

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <View
            style={[
                styles.roomData,
                isRoomActive ? styles.dataActive : styles.dataNormal,
            ]}
        >
            <Text
                style={[
                    styles.roomName,
                    isRoomActive ? styles.dataActive : styles.dataNormal,
                ]}
            >
                {shortText(roomName)}
            </Text>
            <Text
                style={[
                    styles.roomMessage,
                    isRoomActive ? styles.dataActive : styles.dataNormal,
                ]}
            >
                {shortText(roomLastMessage)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    roomData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    dataActive: {
        color: "#FFF",
    },

    dataNormal: {
        color: "#1A1A1A",
    },

    roomName: {
        fontFamily: "Poppins_500Medium",
        fontSize: 15,
        lineHeight: 20,
    },

    roomMessage: {
        fontFamily: "Poppins_400Regular",
    },
});
