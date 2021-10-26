import { CheckCircle, MoreVert } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoPageRowContainer = styled.div`
    & .vertical__dots {
        display: block;
        color: #606060;
    }

    & .link {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
        flex: 1;
        text-decoration: none;
        color: inherit;
    }
`;

const VideoPageRowImg = styled.img`
    object-fit: contain;
    width: 150px;
`;
const VideoPageRowText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;

    & > h4 {
        font-weight: 500;
        font-size: small;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    & > p {
        color: #606060;

        font-size: x-small;
    }
`;
const Channel = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    margin-top: 5px;

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

function VideoPageRow({ views, title, time, channel, image }) {
    return (
        <VideoPageRowContainer>
            <Link className="link" to="/video/alright">
                <VideoPageRowImg src={image} alt="video_image" />
                <VideoPageRowText className="video__text">
                    <h4>{title}</h4>
                    <p>
                        <span>{views} views</span>
                        <span className="dot"> • </span>
                        <span>{time} ago</span>
                    </p>
                    <Channel>
                        <p>{channel}</p>
                        <CheckCircle className="verified__icon" />
                    </Channel>
                </VideoPageRowText>
                <MoreVert className="vertical__dots" />
            </Link>
        </VideoPageRowContainer>
    );
}

export default VideoPageRow;
