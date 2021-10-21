// default import
import React from "react";

// libraries
import styled from "styled-components";

const SidebarRowTitle = styled.h2`
    flex: 1;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 500;
`;

const SidebarRowContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;

    & > .sidebarRow__icon {
        color: #606060;
        font-size: large !important;
    }

    &.selected {
        background-color: lightgray;

        & > .sidebarRow__icon {
            color: red;
        }

        & > ${SidebarRowTitle} {
            font-weight: bold;
        }
    }

    &:hover {
        background-color: lightgray;
        cursor: pointer;

        & > .sidebarRow__icon {
            color: red;
        }

        & > ${SidebarRowTitle} {
            font-weight: bold;
        }
    }
`;

function SidebarRow({ selected, Icon, title }) {
    return (
        <SidebarRowContainer className={selected && "selected"}>
            <Icon className="sidebarRow__icon" />
            <SidebarRowTitle>{title}</SidebarRowTitle>
        </SidebarRowContainer>
    );
}

export default SidebarRow;
