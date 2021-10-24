import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import ChannelRow from "./ChannelRow";

const SearchPageContainer = styled.div`
    flex: 0.85;
    height: 83vh;
    background-color: #f9f9f9;
    padding: 20px 50px;
    padding-bottom: 0;
    overflow-y: scroll;

    & > hr {
        height: 1px;
        border: 0;
        background-color: lightgray;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 760px) {
        flex: 1;
        padding: 20px;
    }
`;

const SearchPageFilter = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    font-size: xx-small !important;

    & > h2 {
        margin-left: 10px;
        text-transform: uppercase;
    }
`;

function SearchPage() {
    return (
        <SearchPageContainer>
            <SearchPageFilter>
                <TuneOutlined />
                <h2>Filter</h2>
            </SearchPageFilter>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Alright!"
                verified
                subs="2.71M"
                noOfViideos="195"
                description="Alright isn't just a word, it's an emotion, a feeling. It is something that can make us feel better in a fraction of a second. Alright is the..."
            />
            <hr />
        </SearchPageContainer>
    );
}

export default SearchPage;
