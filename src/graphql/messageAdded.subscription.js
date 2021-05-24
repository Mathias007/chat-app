import { gql } from "@apollo/client";

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
    subscription Added($roomId: String!) {
        messageAdded(roomId: $roomId) {
            body
            id
            insertedAt
            user {
                firstName
            }
        }
    }
`;
