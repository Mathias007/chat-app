export const POST_NEW_MESSAGE = gql`
    mutation Message($body: String!, $roomId: String!) {
        sendMessage(body: $body, roomId: $roomId) {
            body
            id
            insertedAt
            user {
                id
                firstName
            }
        }
    }
`;
