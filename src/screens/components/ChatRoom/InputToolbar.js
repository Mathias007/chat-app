import React from "react";
import { StyleSheet } from "react-native";
import { InputToolbar, Composer, Send } from "react-native-gifted-chat";

import VectorIcon from "../VectorIcon";

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={styles.toolbarContainer}
        primaryStyle={styles.toolbarPrimary}
    />
);

export const renderComposer = (props) => (
    <Composer {...props} textInputStyle={styles.composer} />
);

export const renderSend = (props) => (
    <Send {...props} disabled={!props.text} containerStyle={styles.send}>
        <VectorIcon iconType="send" iconWidth={34} iconHeight={34} />
    </Send>
);

const styles = StyleSheet.create({
    toolbarPrimary: { alignItems: "center" },

    toolbarContainer: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#B6DEFD",
    },

    composer: {
        padding: 12,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        color: "#222B45",
        backgroundColor: "#EDF1F7",
    },

    send: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 12,
    },
});
