import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

import HeaderIcon from "./HeaderIcon";
import HeaderTitle from "./HeaderTitle";
import HeaderOptions from "./HeaderOptions";

export default function ScreenHeader({
    leftHeadingIcon,
    title,
    subtitle,
    firstSettingsIcon,
    secondSettingsIcon,
}) {
    return (
        <Header
            containerStyle={styles.headerContainer}
            statusBarProps={{ barStyle: "light-content" }}
            placement="left"
        >
            {leftHeadingIcon ? (
                <HeaderIcon iconSource={leftHeadingIcon} />
            ) : null}
            <HeaderTitle title={title} subtitle={subtitle} />
            {firstSettingsIcon || secondSettingsIcon ? (
                <HeaderOptions
                    firstIcon={firstSettingsIcon}
                    secondIcon={secondSettingsIcon}
                />
            ) : null}
        </Header>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#B6DEFD",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
});
