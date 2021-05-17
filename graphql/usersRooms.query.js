import { gql } from "@apollo/client";

export const GET_ROOMS_DATA = gql`
    {
        usersRooms {
            rooms {
                id
                name
                roomPic
            }
        }
    }
`;
