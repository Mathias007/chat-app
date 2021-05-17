import React from "react";

import PhoneIcon from "../../assets/phone.svg";
import ProfileIcon from "../../assets/profile.svg";
import RoomsIcon from "../../assets/rooms.svg";
import SearchIcon from "../../assets/search.svg";
import SendIcon from "../../assets/send.svg";
import VideoIcon from "../../assets/videocall.svg";
import VisionIcon from "../../assets/vision.svg";
import VisionLowIcon from "../../assets/vision-low.svg";

export default function VectorIcon({
    iconType,
    iconStyle,
    iconWidth,
    iconHeight,
}) {
    switch (iconType) {
        case "phone":
            return (
                <PhoneIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "plus":
            return (
                <PlusIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "profile":
            return (
                <ProfileIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "rooms":
            return (
                <RoomsIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "search":
            return (
                <SearchIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "send":
            return (
                <SendIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "video":
            return (
                <VideoIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "vision":
            return (
                <VisionIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        case "vision-low":
            return (
                <VisionLowIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );

        default:
            return (
                <ProfileIcon
                    style={iconStyle}
                    width={iconWidth}
                    height={iconHeight}
                />
            );
    }
}
