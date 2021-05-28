import React from "react";
import { StyleSheet } from "react-native";
import { Bubble, Message, MessageText } from "react-native-gifted-chat";

export const renderBubble = (props) => (
    <Bubble
        {...props}
        containerStyle={{
            left: styles.bubbleContainerLeft,
            right: styles.bubbleContainerRight,
        }}
        wrapperStyle={{
            left: styles.bubbleWrapperLeft,
            right: styles.bubbleWrapperRight,
        }}
    />
);

export const renderMessage = (props) => <Message {...props} />;

export const renderMessageText = (props) => (
    <MessageText
        {...props}
        textStyle={styles.messageText}
        linkStyle={styles.messageLink}
    />
);

const styles = StyleSheet.create({
    bubbleContainerLeft: {
        marginBottom: 12,
        marginLeft: 18,
    },

    bubbleContainerRight: {
        marginRight: 18,
        marginBottom: 12,
    },

    bubbleWrapperLeft: {
        padding: 12,
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        backgroundColor: "#FFF",
    },

    bubbleWrapperRight: {
        padding: 12,
        borderRadius: 12,
        borderBottomRightRadius: 0,
        backgroundColor: "#993AFC",
    },

    messageText: {
        fontSize: 14,
    },

    messageLink: {
        fontFamily: "Poppins_700Bold",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color: "#259DFA",
    },
});
