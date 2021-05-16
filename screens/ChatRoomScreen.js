import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import emojiUtils from "emoji-utils";

import { gql, useMutation } from "@apollo/client";

import Message from "./components/ChatRoom/Message";

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

export default function ChatRoomScreen({ navigation, route }) {
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

            console.log(message);
            console.log(roomID);

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

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderMessage={renderMessage}
        />
    );
}
