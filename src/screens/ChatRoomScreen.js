import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import ScreenHeader from "./components/Header/ScreenHeader";

import {
    renderBubble,
    renderMessage,
    renderMessageText,
} from "./components/ChatRoom/MessageContainer";

import {
    renderInputToolbar,
    renderComposer,
    renderSend,
} from "./components/ChatRoom/InputToolbar";

import { useMutation } from "@apollo/client";

import { POST_NEW_MESSAGE } from "../graphql/sendMessage.mutation";

export default function ChatRoomScreen({ navigation, route }) {
    const [text, setText] = useState("");
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

    const onSend = (newMessages = []) => {
        setMessages(GiftedChat.append(newMessages, messages));

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
    };

    const parseLinkPattern = (linkStyle) => [
        {
            pattern: /#(\w+)/,
            style: linkStyle,
            onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
    ];

    const { name, roomPic } = route.params.chatData.room;

    return (
        <>
            <ScreenHeader
                title={name}
                subtitle="Active now"
                leftHeadingIcon={{ uri: roomPic }}
                firstSettingsIcon="phone"
                secondSettingsIcon="video"
            />
            <GiftedChat
                inverted={false}
                messages={messages}
                text={text}
                onInputTextChanged={setText}
                onSend={onSend}
                user={{
                    _id: 1,
                }}
                alignTop
                alwaysShowSend
                scrollToBottom
                renderInputToolbar={renderInputToolbar}
                renderComposer={renderComposer}
                renderSend={renderSend}
                renderAvatar={null}
                renderBubble={renderBubble}
                renderMessage={renderMessage}
                renderMessageText={renderMessageText}
                isCustomViewBottom
                messagesContainerStyle={styles.chatContainer}
                parsePatterns={parseLinkPattern}
            />
        </>
    );
}

const styles = StyleSheet.create({
    chatContainer: {
        marginBottom: 12,
        backgroundColor: "#F0F8FF",
    },
});
