import React from "react";
import { View, StyleSheet } from "react-native";

import { Day, utils } from "react-native-gifted-chat";
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
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 12,
        backgroundColor: "#FFF",
    },
});
