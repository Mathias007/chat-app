import React from "react";
import AppLoading from "expo-app-loading";

import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ScreenHeader from "./components/Header/ScreenHeader";
import RoomCard from "./components/RoomsList/RoomCard";
import Error from "./components/Error";

import { useQuery } from "@apollo/client";

import { GET_ROOMS_DATA } from "../graphql/usersRooms.query";

export default function RoomsListScreen({ navigation }) {
    const { loading, error, data } = useQuery(GET_ROOMS_DATA);

    if (loading) {
        return <AppLoading />;
    }

    if (error) return <Error error={error.message} />;

    const { rooms } = data.usersRooms;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScreenHeader
                title="Rooms"
                firstSettingsIcon="rooms"
                secondSettingsIcon="search"
            />
            <View style={styles.roomsList}>
                {rooms.map((room) => {
                    const { id, name, roomPic } = room;

                    return (
                        <RoomCard
                            key={id}
                            id={id}
                            name={name}
                            roomPic={roomPic}
                            navigation={navigation}
                        />
                    );
                })}
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
    roomsList: {
        marginTop: 20,
        paddingHorizontal: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
