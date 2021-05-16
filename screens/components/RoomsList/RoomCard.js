import React from "react";
import AppLoading from "expo-app-loading";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { gql, useQuery } from "@apollo/client";

const GET_SINGLE_ROOM_DATA = gql`
    query RoomType($id: String!) {
        room(id: $id) {
            id,
            name
            messages {
                id
                body
                insertedAt
                user {
                    firstName
                }
            }
        }
    }
`;

export default function RoomCard({ id, name, roomPic, navigation }, {}) {
    const { loading, error, data } = useQuery(GET_SINGLE_ROOM_DATA, {
        variables: { id },
    });

    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoadeed || loading) {
        return <AppLoading />;
    }

    if (error) return <Text>Error! ${error.message}</Text>;

    const { body, insertedAt } = data.room.messages[
        data.room.messages.length - 1
    ];

    return (
        <TouchableOpacity
            style={styles.activeRoom}
            key={id}
            onPress={() => navigation.navigate("Chat", { chatData: data })}
        >
            <Avatar
                size="small"
                rounded
                source={{
                    uri: roomPic,
                }}
                style={styles.roomAvatar}
            />
            <View style={styles.roomData}>
                <Text style={styles.roomName}>{name}</Text>
                <Text style={styles.roomMessage}>{body}</Text>
            </View>
            <Text style={styles.roomMeta}>{insertedAt}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    room: {
        position: "relative",
        width: 350,
        height: 100,
        margin: 10,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 12,
    },

    activeRoom: {
        position: "relative",
        width: 350,
        height: 100,
        margin: 10,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5603AD",
        borderRadius: 12,
    },

    roomData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#FFF",
    },

    roomAvatar: {
        backgroundColor: "black",
    },

    roomName: {
        color: "#FFF",
        fontFamily: "Poppins_500Medium",
        fontSize: 15,
        lineHeight: 20,
    },

    roomMessage: {
        color: "#FFF",
        fontFamily: "Poppins_400Regular",
    },

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
