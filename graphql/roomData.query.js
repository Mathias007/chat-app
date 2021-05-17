import { gql } from "@apollo/client";

export const GET_SINGLE_ROOM_DATA = gql`
    query RoomType($id: String!) {
        room(id: $id) {
            id
            roomPic
            name
            messages {
                id
                body
                insertedAt
                user {
                    firstName
                }
            }
        }
    }
`;
