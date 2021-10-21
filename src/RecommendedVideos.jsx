// default import
import React from "react";

// libraries
import styled from "styled-components";

const RecommendedContainer = styled.div`
    flex: 0.85;
    /* border: 1px solid black; */

    @media (max-width: 760px) {
        flex: 1;
    }
`;

function RecommendedVideos() {
    return (
        <RecommendedContainer>
            <h2>This is where videos go</h2>
        </RecommendedContainer>
    );
}

export default RecommendedVideos;
