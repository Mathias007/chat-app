import React from "react";
import { Image, StyleSheet } from "react-native";
import VectorIcon from "../VectorIcon";

export default function RoomImage({ imagePath }) {
    if (imagePath)
        return <Image source={{ uri: imagePath }} style={styles.roomAvatar} />;
    else
        return (
            <VectorIcon
                iconType="rooms"
                iconWidth={44}
                iconHeight={44}
                iconStyle={styles.roomAvatar}
            />
        );
}

const styles = StyleSheet.create({
    roomAvatar: {
        width: 44,
        height: 44,
        borderRadius: 50,
    },
});
