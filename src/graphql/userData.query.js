import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
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
