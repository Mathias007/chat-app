import React from "react";

import { Image, StyleSheet } from "react-native";

export default function HeaderIcon({ iconSource }) {
    return <Image source={iconSource} style={styles.headerIcon} />;
}

const styles = StyleSheet.create({
    headerIcon: {
        width: 44,
        height: 44,
        marginTop: 8,
        borderRadius: 50,
        backgroundColor: "#fff",
    },
});
