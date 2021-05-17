import React from "react";
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
            <HeaderOptions firstIcon={firstIcon} secondIcon={secondIcon} />
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
