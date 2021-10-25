import { Avatar } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const ChannelRowContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 760px) {
        padding: 0;
    }

    & .channel__icon {
        height: 136px !important;
        width: 136px !important;
        margin-left: 100px;
        margin-right: 100px;

        @media (max-width: 860px) {
            margin-left: 30px;
            margin-right: 30px;
        }
    }
`;

const Button = styled.button`
    background-color: red;
    color: white;
    border: 1px solid red;
    cursor: pointer;
    padding: 10px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px;

    @media (max-width: 980px) {
        display: none;
    }
`;

const ChannelRowText = styled.div`
    display: flex;
    flex-direction: column;
    & > h4 {
        font-size: large;
        margin-bottom: 8px;
    }

    & > p {
        margin-bottom: 4px;
        color: #606060;
    }

    & .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    & .verifiedIcon {
        font-size: small;
    }
`;

function ChannelRow({
    image,
    channel,
    verified,
    subs,
    noOfViideos,
    description,
}) {
    return (
        <ChannelRowContainer>
            <Avatar className="channel__icon" src={image} alt={channel} />
            <ChannelRowText>
                <h4>
                    {channel}
                    {verified && <CheckCircle className="verifiedIcon" />}
                </h4>
                <p>
                    {subs} subscribers • {noOfViideos} videos
                </p>
                <p className="description">{description}</p>
            </ChannelRowText>
            <Button>Subscribe</Button>
        </ChannelRowContainer>
    );
}

export default ChannelRow;
