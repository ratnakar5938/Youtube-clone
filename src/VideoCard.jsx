import { Avatar } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoCardInfo = styled.div`
    display: flex;
    margin-top: 10px;
    padding-right: 20px;

    & > .videoCard__avatar {
        width: 35px !important;
        height: 35px !important;
    }
`;

const VideoCardText = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;

    & > div {
        display: flex;
        justify-content: space-between;
    }

    & > div > h4 {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        @supports (-webkit-line-clamp: 2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    & .vertical__dots {
        display: none;
    }

    & > p {
        font-size: 14px;
        color: #60656a;
        font-weight: 400;
    }

    & > .channel__name:hover {
        color: black;
    }
`;

const VideoCardContainer = styled.div`
    width: 270px;
    margin-bottom: 40px;
    cursor: pointer;

    & .link {
        text-decoration: none;
        color: inherit;
    }

    &:hover ${VideoCardInfo} {
        padding-right: 0;
    }

    &:hover ${VideoCardText} {
        & .vertical__dots {
            display: block;
        }
    }

    @media (max-width: 600px) {
        width: 100vw;

        & ${VideoCardInfo} {
            padding-left: 20px;
        }

        & ${VideoCardText} {
            & .vertical__dots {
                display: block;
            }
        }
    }
`;

const VideoCardImage = styled.img`
    width: 100%;
`;

function VideoCard({ image, channel, channel_icon, title, views, timestamp }) {
    return (
        <VideoCardContainer>
            <Link className="link" to="/video/alright">
                <VideoCardImage src={image} alt="" />
                <VideoCardInfo>
                    <Avatar
                        className="videoCard__avatar"
                        alt={channel}
                        src={channel_icon}
                    />
                    <VideoCardText>
                        <div>
                            <h4>{title}</h4>
                            <MoreVert className="vertical__dots" />
                        </div>
                        <p className="channel__name">{channel}</p>
                        <p className="views__timestamp">
                            {views} • {timestamp}
                        </p>
                    </VideoCardText>
                </VideoCardInfo>
            </Link>
        </VideoCardContainer>
    );
}

export default VideoCard;
