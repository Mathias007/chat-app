import React from "react";
import { View, Image } from "react-native";

export default function HeaderOptions({ firstIcon, secondIcon }) {
    return (
        <View style={styles.options}>
            <Image source={firstIcon} style={styles.optionIcon} />
            <Image source={secondIcon} style={styles.optionIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    options: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1.5,
    },

    optionIcon: {
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: "#fff",
    },
});
