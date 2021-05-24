import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation Register(
        $email: String!
        $firstName: String!
        $lastName: String!
        $password: String!
        $passwordConfirmation: String!
    ) {
        registerUser(
            email: $email
            firstName: $firstName
            lastName: $lastName
            password: $password
            passwordConfirmation: $passwordConfirmation
        ) {
            id
            email
            firstName
            lastName
            profilePic
            role
        }
    }
`;
