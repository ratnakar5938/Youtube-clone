import { Avatar } from "@material-ui/core";
import { CheckCircle, MoreVert } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoRowContainer = styled.div`
    & .link {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        flex: 1;
        text-decoration: none;
        color: inherit;
    }

    & .vertical__dots {
        display: none;
        @media (max-width: 760px) {
            display: block;
            color: #606060;
        }
    }

    &:hover {
        & .vertical__dots {
            display: block;
        }

        & .video__text {
            margin-right: 0;
        }
    }

    @media (max-width: 600px) {
        & .video__text {
            margin-right: 0;
        }
    }
`;

const VideoRowImg = styled.img`
    object-fit: contain;
    width: 320px;

    @media (max-width: 980px) {
        width: 240px;
    }
    @media (max-width: 600px) {
        width: 150px;
    }
`;
const VideoRowText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    margin-right: 30px;

    & > h4 {
        font-size: large;
        font-weight: 500;
        @media (max-width: 980px) {
            font-size: small;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    & > p {
        color: #606060;
        font-size: smaller;

        @media (max-width: 400px) {
            font-size: x-small;
            & > span {
                display: block;
            }
            & .dot {
                display: none;
            }
        }
    }

    & .video__description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        @media (max-width: 600px) {
            display: none;
        }
    }
`;
const Channel = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    margin-top: 15px;
    margin-bottom: 15px;

    & .channel__logo {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        @media (max-width: 600px) {
            display: none;
        }
    }
    & > p {
        font-size: smaller;
        font-weight: 500;
    }

    & .verified__icon {
        font-size: smaller;
    }

    @media (max-width: 980px) {
        margin-top: 4px;
        margin-bottom: 4px;
    }
`;

function VideoRow({ views, title, time, channel, description, image, logo }) {
    return (
        <VideoRowContainer>
            <Link className="link" to="/video/alright">
                <VideoRowImg src={image} alt="video_image" />
                <VideoRowText className="video__text">
                    <h4>{title}</h4>
                    <p>
                        <span>{views} views</span>
                        <span className="dot"> • </span>
                        <span>{time} ago</span>
                    </p>
                    <Channel>
                        <Avatar
                            className="channel__logo"
                            src={logo}
                            alt={channel}
                        />
                        <p>{channel}</p>
                        <CheckCircle className="verified__icon" />
                    </Channel>
                    <p className="video__description">{description}</p>
                </VideoRowText>
                <MoreVert className="vertical__dots" />
            </Link>
        </VideoRowContainer>
    );
}

export default VideoRow;
