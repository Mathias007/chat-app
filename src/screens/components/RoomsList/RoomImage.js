import React from "react";
import { Image, StyleSheet } from "react-native";

export default function RoomImage({ imagePath }) {
    const imageSource = {
        uri: imagePath ? imagePath : "../../../assets/rooms.svg",
    };

    return <Image source={imageSource} style={styles.roomAvatar} />;
}

const styles = StyleSheet.create({
    roomAvatar: {
        width: 44,
        height: 44,
        borderRadius: 50,
    },
});
