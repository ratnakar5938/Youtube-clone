// default import
import React from "react";

// libraries
import {
    Apps,
    Menu,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
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
`;

const HeaderLogo = styled.img`
    height: 25px;
    object-fit: contain;
    margin-left: 20px;
`;

const HeaderLeftContainer = styled.div``;

const HeaderCenterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    border: 1px solid black;

    & > input {
        flex: 1;
        border: none;
    }

    & > .input_btn {
        width: 50px !important;
        background-color: #fafafa;
        border-left: 1px solid lightgray;
        color: gray;
    }
`;

const HeaderIcons = styled.div`
    display: flex;
    align-items: center;

    & > .header_icon {
        margin-right: 8px;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeftContainer>
                <Menu />
                <HeaderLogo
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </HeaderLeftContainer>

            <HeaderCenterContainer>
                <input placeholder="Search" type="text" />
                <Search className="input_btn" />
            </HeaderCenterContainer>

            <HeaderIcons>
                <VideoCall className="header_icon" />
                <Apps className="header_icon" />
                <Notifications className="header_icon" />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/80893583?v=4"
                    alt="my profile"
                />
            </HeaderIcons>
        </HeaderContainer>
    );
}

export default Header;
