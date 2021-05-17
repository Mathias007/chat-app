import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";
import emojiUtils from "emoji-utils";

import { useMutation } from "@apollo/client";

import ScreenHeader from "./components/Header/ScreenHeader";
import Message from "./components/ChatRoom/Message";

import { POST_NEW_MESSAGE } from "../graphql/sendMessage.mutation";

const videoIcon = "../assets/videocall.svg";
const phoneIcon = "../assets/phone.svg";

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
        <>
            <ScreenHeader
                title={route.params.chatData.room.name}
                subtitle="Active now"
                leftIcon={{ uri: route.params.chatData.room.roomPic }}
                firstIcon={{ uri: phoneIcon }}
                secondIcon={{ uri: videoIcon }}
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
