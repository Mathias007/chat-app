import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { Platform, StyleSheet, View, Text } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";
import emojiUtils from "emoji-utils";

import { gql, useMutation } from "@apollo/client";

import { Header, Image } from "react-native-elements";

import Message from "./components/ChatRoom/Message";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const POST_NEW_MESSAGE = gql`
    mutation Message($body: String!, $roomId: String!) {
        sendMessage(body: $body, roomId: $roomId) {
            body
            id
            insertedAt
            user {
                id
                firstName
            }
        }
    }
`;

const videoIcon = require("../assets/videocall.svg");
const phoneIcon = require("../assets/phone.svg");

export default function ChatRoomScreen({ navigation, route }) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const [messages, setMessages] = useState([]);
    const [roomID, setRoomID] = useState("");

    useEffect(() => {
        setRoomID(route.params.chatData.room.id);
        setMessages(
            route.params.chatData.room.messages.map((message) => {
                const { id, body, insertedAt, user } = message;

                return {
                    _id: id,
                    text: body,
                    createdAt: insertedAt,
                    user: {
                        _id: user.id,
                        name: user.firstName,
                        avatar: user.profilePic,
                    },
                };
            })
        );
    }, []);

    const [sendMessage, { data }] = useMutation(POST_NEW_MESSAGE);

    function onSend(newMessages = []) {
        setMessages(GiftedChat.append(messages, newMessages));

        newMessages.forEach((message) => {
            const { _id, text, createdAt, user } = message;

            sendMessage({
                variables: {
                    roomId: roomID,
                    body: text,
                    id: _id,
                    insertedAt: createdAt,
                    user,
                },
            });
        });
    }

    function renderMessage(props) {
        const {
            currentMessage: { text: currText },
        } = props;

        let messageTextStyle;

        // Make "pure emoji" messages much bigger than plain text.
        if (currText && emojiUtils.isPureEmojiString(currText)) {
            messageTextStyle = {
                fontSize: 28,
                // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
                lineHeight: Platform.OS === "android" ? 34 : 30,
            };
        }

        return <Message {...props} messageTextStyle={messageTextStyle} />;
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                placement="left"
                leftComponent={
                    <Image
                        source={{ uri: route.params.chatData.room.roomPic }}
                        style={styles.optionIcon}
                    />
                }
                leftContainerStyle={styles.optionIcon}
                centerComponent={
                    <View>
                        <Text style={styles.headerTitle}>
                            {route.params.chatData.room.name}
                        </Text>
                        <Text style={styles.headerSubtitle}>Active now</Text>
                    </View>
                }
                containerStyle={styles.headerContainer}
                rightComponent={
                    <View style={styles.options}>
                        <Image source={phoneIcon} style={styles.optionIcon} />
                        <Image source={videoIcon} style={styles.optionIcon} />
                    </View>
                }
                rightContainerStyle={styles.options}
            />
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderMessage={renderMessage}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
    },
    headerContainer: {
        backgroundColor: "#B6DEFD",
        justifyContent: "center",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerTitle: {
        color: "#5603AD",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "left",
        flex: 1,
    },
    headerSubtitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 18,
    },
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
