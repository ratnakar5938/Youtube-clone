// default import
import React from "react";

// libraries
import {
    Apps,
    Menu,
    Mic,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;

    @media (max-width: 760px) {
        position: inherit;
        padding: 10px;
    }
`;

const HeaderLogo = styled.img`
    height: 25px;
    object-fit: contain;
    margin-left: 20px;
    @media (max-width: 760px) {
        display: none;
    }
`;

const HeaderLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > .header__icon {
        padding: 8px;
        border-radius: 100%;
        cursor: pointer;
        &:hover {
            background-color: #fafafa;
        }
    }
`;

const HeaderCenterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    @media (max-width: 760px) {
        width: 100%;
        margin-left: 10px;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    flex: 1;

    & > input {
        flex: 1;
        border: 1px transparent;
        padding: 10px;
        border-radius: 50px 0 0 50px;
    }

    & > .input_btn {
        width: 50px !important;
        background-color: #fafafa;
        border-left: 1px solid lightgray;
        color: gray;
        border-radius: 0 50px 50px 0;
        cursor: pointer;
    }
`;

const HeaderIcons = styled.div`
    display: flex;
    align-items: center;

    & > .header_icon {
        /* margin-right: 8px; */
        padding: 8px;
        border-radius: 100%;
        cursor: pointer;

        &:hover {
            background-color: #fafafa;
        }

        @media (max-width: 760px) {
            display: none;
        }
    }

    & > .last_icon {
        margin-right: 8px;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeftContainer>
                <Menu className="header__icon" />
                <HeaderLogo
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </HeaderLeftContainer>

            <HeaderCenterContainer>
                <SearchContainer>
                    <input placeholder="Search" type="text" />
                    <Search className="input_btn" />
                </SearchContainer>
                <IconButton>
                    <Mic />
                </IconButton>
            </HeaderCenterContainer>

            <HeaderIcons>
                <VideoCall className="header_icon" />
                <Apps className="header_icon" />
                <Notifications className="header_icon last_icon" />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/80893583?v=4"
                    alt="my profile"
                    style={{ cursor: "pointer" }}
                />
            </HeaderIcons>
        </HeaderContainer>
    );
}

export default Header;
