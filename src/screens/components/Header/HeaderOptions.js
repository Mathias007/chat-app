import React from "react";
import { View, StyleSheet } from "react-native";
import VectorIcon from "../VectorIcon";

export default function HeaderOptions({ firstIcon, secondIcon }) {
    return (
        <View style={styles.options}>
            {firstIcon ? (
                <VectorIcon
                    iconType={firstIcon}
                    iconWidth={44}
                    iconHeight={44}
                    iconStyle={styles.optionIcon}
                />
            ) : null}
            {secondIcon ? (
                <VectorIcon
                    iconType={secondIcon}
                    iconWidth={44}
                    iconHeight={44}
                    iconStyle={styles.optionIcon}
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    options: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },

    optionIcon: {
        width: 44,
        height: 44,
        marginHorizontal: 5,
        marginBottom: 24,
        borderRadius: 50,
        backgroundColor: "#fff",
    },
});
