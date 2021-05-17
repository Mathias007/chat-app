import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import { Text, StyleSheet, TouchableOpacity } from "react-native";

import RoomImage from "./RoomImage";
import RoomData from "./RoomData";
import RoomMeta from "./RoomMeta";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_ROOM_DATA } from "../../../graphql/roomData.query";

export default function RoomCard({ id, name, roomPic, navigation }) {
    const [isRoomActive, setActive] = useState(false);

    const { loading, error, data } = useQuery(GET_SINGLE_ROOM_DATA, {
        variables: { id },
    });

    const handleRoomPressing = () => {
        setActive(!isRoomActive);
        setTimeout(() => navigation.navigate("Chat", { chatData: data }), 500);
    };

    if (loading) {
        return <AppLoading />;
    }

    if (error) return <Text>Error! {error.message}</Text>;

    const { body, insertedAt } = data.room.messages[
        data.room.messages.length - 1
    ];

    return (
        <TouchableOpacity
            style={[
                styles.room,
                isRoomActive ? styles.activeRoom : styles.customRoom,
            ]}
            key={id}
            onPress={handleRoomPressing}
        >
            <RoomImage imagePath={roomPic} />
            <RoomData
                roomName={name}
                roomLastMessage={body}
                isRoomActive={isRoomActive}
            />
            <RoomMeta date={insertedAt} />
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
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 12,
    },

    activeRoom: {
        backgroundColor: "#5603AD",
    },

    customRoom: {
        backgroundColor: "#FFF",
    },
});
