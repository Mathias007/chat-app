import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { gql, useQuery } from "@apollo/client";

const GET_USER_DATA = gql`
    {
        user {
            firstName
            lastName
            email
            id
            role
            profilePic
        }
    }
`;
export default function App() {
    const { loading, error, data } = useQuery(GET_USER_DATA);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>`Error! ${error.message}`</Text>;

    const { email, firstName, lastName, profilePic, role } = data.user;

    return (
        <View style={styles.container}>
            <Text>
                {firstName}
                {lastName}
            </Text>
            <Text style={{ color: "red", fontSize: 18 }}>{email}</Text>
            <Text>
                <Image
                    source={{ uri: profilePic }}
                    style={{ width: 400, height: 400 }}
                />
            </Text>
            <Text>{role}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
