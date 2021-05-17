import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";

import HeaderIcon from "./HeaderIcon";
import HeaderTitle from "./HeaderTitle";
import HeaderOptions from "./HeaderOptions";

export default function ScreenHeader({
    title,
    subtitle,
    firstIcon,
    secondIcon,
    leftIcon,
}) {
    return (
        <Header
            containerStyle={styles.headerContainer}
            statusBarProps={{ barStyle: "light-content" }}
            placement="left"
        >
            {leftIcon ? <HeaderIcon iconSource={leftIcon} /> : null}
            <HeaderTitle title={title} subtitle={subtitle} />
            {firstIcon || secondIcon ? (
                <HeaderOptions firstIcon={firstIcon} secondIcon={secondIcon} />
            ) : null}
        </Header>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#B6DEFD",
        justifyContent: "space-between",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
});
