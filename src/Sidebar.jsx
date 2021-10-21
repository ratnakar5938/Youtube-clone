// default import
import React from "react";

// libraries
import styled from "styled-components";
import {
    ExpandMoreOutlined,
    History,
    Home,
    OndemandVideo,
    Subscriptions,
    ThumbUpAltOutlined,
    VideoLibrary,
    WatchLater,
    Whatshot,
} from "@material-ui/icons";

// components
import SidebarRow from "./SidebarRow";

const SidebarContainer = styled.div`
    flex: 0.15;

    & > hr {
        height: 1px;
        border: 0;
        background-color: lightgray;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 760px) {
        display: none;
    }
`;

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarRow selected Icon={Home} title="Home" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your Videos" />
            <SidebarRow Icon={WatchLater} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show More" />
            <hr />
        </SidebarContainer>
    );
}

export default Sidebar;
