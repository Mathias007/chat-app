import React from "react";
import AppLoading from "expo-app-loading";

import { View, Text, StyleSheet } from "react-native";
import { Header, Avatar, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function RoomsListScreen({ navigation }) {
    let [fontsLoadeed] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    if (!fontsLoadeed) {
        return <AppLoading />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                statusBarProps={{ barStyle: "light-content" }}
                placement="left"
                centerComponent={{ text: "Rooms", style: styles.headerTitle }}
                containerStyle={styles.headerContainer}
                rightComponent={
                    <View style={styles.options}>
                        <Image
                            source={{ uri: "../assets/search.svg" }}
                            style={styles.optionIcon}
                        />
                        <Image
                            source={{ uri: "../assets/rooms.svg" }}
                            style={styles.optionIcon}
                        />
                    </View>
                }
                rightContainerStyle={styles.options}
            />
            <View style={styles.roomsList}>
                <View style={styles.activeRoom}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                        }}
                        style={styles.roomAvatar}
                    />
                    <View style={styles.roomData}>
                        <Text style={styles.roomName}>The one with Harry</Text>
                        <Text style={styles.roomMessage}>
                            Hey Harry, how you doing?
                        </Text>
                    </View>
                    <Text style={styles.roomMeta}>24m ago</Text>
                </View>

                <View style={styles.room}>
                    <Avatar
                        rounded
                        // source={{
                        //     uri:
                        //         "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                        // }}
                        icon={{ name: "home" }}
                        style={styles.roomAvatar}
                    />
                    <Text style={styles.roomData}>
                        <Text style={styles.roomName}>The one with Harry</Text>
                        <Text style={styles.roomMessage}>
                            Hey Harry, how you doing?
                        </Text>
                    </Text>
                    <Text style={styles.roomMeta}>24m ago</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
    },
    headerContainer: {
        backgroundColor: "#B6DEFD",
        justifyContent: "space-between",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerTitle: {
        color: "#5603AD",
        fontFamily: "Poppins_700Bold",
        fontSize: 36,
        lineHeight: 54,
        textAlign: "left",
        flex: 1,
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

    roomsList: {
        marginTop: 20,
        paddingHorizontal: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },

    room: {
        position: "relative",
        width: 350,
        height: 100,
        margin: 10,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 12,
    },

    activeRoom: {
        position: "relative",
        width: 350,
        height: 100,
        margin: 10,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5603AD",
        borderRadius: 12,
    },

    roomData: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#FFF",
    },

    roomAvatar: {
        backgroundColor: "black",
    },

    roomName: {
        color: "#FFF",
        fontFamily: "Poppins_500Medium",
        fontSize: 15,
        lineHeight: 20,
    },

    roomMessage: {
        color: "#FFF",
        fontFamily: "Poppins_400Regular",
    },

    roomMeta: {
        position: "absolute",
        top: 10,
        right: 10,
        color: "#9FA2B2",
        fontFamily: "Poppins_400Regular",
        fontSize: 10,
        lineHeight: 12,
    },
});
