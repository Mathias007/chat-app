import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function HeaderOptions({ firstIcon, secondIcon }) {
    return (
        <View style={styles.options}>
            {firstIcon ? (
                <Image source={firstIcon} style={styles.optionIcon} />
            ) : null}
            {secondIcon ? (
                <Image source={secondIcon} style={styles.optionIcon} />
            ) : null}
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
