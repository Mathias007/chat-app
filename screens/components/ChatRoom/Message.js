import React from "react";
import { View, StyleSheet } from "react-native";

import { Avatar, Day, utils } from "react-native-gifted-chat";
import Bubble from "./Bubble";

const { isSameUser, isSameDay } = utils;

export default class Message extends React.Component {
    getInnerComponentProps() {
        const { containerStyle, ...props } = this.props;
        return {
            ...props,
            position: "left",
            isSameUser,
            isSameDay,
        };
    }

    renderDay() {
        if (this.props.currentMessage.createdAt) {
            const dayProps = this.getInnerComponentProps();
            if (this.props.renderDay) {
                return this.props.renderDay(dayProps);
            }
            return <Day {...dayProps} />;
        }
        return null;
    }

    renderBubble() {
        const bubbleProps = this.getInnerComponentProps();
        if (this.props.renderBubble) {
            return this.props.renderBubble(bubbleProps);
        }
        return <Bubble {...bubbleProps} />;
    }

    renderAvatar() {
        let extraStyle;
        if (
            isSameUser(this.props.currentMessage, this.props.previousMessage) &&
            isSameDay(this.props.currentMessage, this.props.previousMessage)
        ) {
            extraStyle = { height: 0 };
        }

        const avatarProps = this.getInnerComponentProps();
        return (
            <Avatar
                {...avatarProps}
                imageStyle={{
                    left: [styles.avatar, avatarProps.imageStyle, extraStyle],
                }}
            />
        );
    }

    render() {
        const marginBottom = isSameUser(
            this.props.currentMessage,
            this.props.nextMessage
        )
            ? 2
            : 10;

        return (
            <View>
                {this.renderDay()}
                <View
                    style={[
                        styles.container,
                        { marginBottom },
                        this.props.containerStyle,
                    ]}
                >
                    {this.renderAvatar()}
                    {this.renderBubble()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        marginLeft: 8,
        marginRight: 0,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 3,
    },
});
