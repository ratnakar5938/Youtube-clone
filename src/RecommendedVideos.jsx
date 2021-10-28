// default import
import React from "react";

// libraries
import styled from "styled-components";

// components
import VideoCard from "./VideoCard";

const RecommendedContainer = styled.div`
    flex: 0.85;
    height: 83vh;
    ${'' /* background-color: #f9f9f9; */}
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: 40px 20px;
    padding-bottom: 0;
    overflow-y: scroll;

    @media (max-width: 760px) {
        flex: 1;
    }

    @media (max-width: 600px) {
        left: 0;
        padding: 0;
        padding-top: 20px;
    }
`;

const RecomendedTitle = styled.h2`
    margin-left: 5px;
    margin-bottom: 20px;
`;

const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;

    @media (max-width: 1330px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1020px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`;

function RecommendedVideos() {
    return (
        <RecommendedContainer>
            <RecomendedTitle>Recommended</RecomendedTitle>
            <VideoContainer>
                <VideoCard
                    title="46 Times Chandler Bing Couldn't Control His Sarcasm"
                    views="5.3M Views"
                    timestamp="3 years ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLSiCiIuXVbmcYeTisMHS8O1_HsJzsnXtmc2LNjV4Q=s68-c-k-c0x00ffffff-no-rj"
                    channel="Next of Ken"
                    image="https://i.ytimg.com/vi/T0VLUA8Bzoo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe_7iJUDzXTJHl6ftqIXkxqGOHog"
                />
                <VideoCard
                    title="Python Artificial Intelligence Tutorial"
                    views="404K Views"
                    timestamp="9 months ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQhP-fa4hpoVZvk3TgJ4G3cWDWTg"
                />
                <VideoCard
                    title="Life of an average guy | Ft. Abhishek Kapoor, Twarita Nagar"
                    views="2M Views"
                    timestamp="2 weeks ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
                    channel="Alright!"
                    image="https://i.ytimg.com/vi/myH3Oisz-tI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIcg1ilSipUrFsdt95eiLptRjdlw"
                />
                <VideoCard
                    title="how programmers attend meetings at big tech companies"
                    views="8.9M Views"
                    timestamp="! year ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s68-c-k-c0x00ffffff-no-rj"
                    channel="Joma Tech"
                    image="https://i.ytimg.com/vi/lpcpsCY4Mco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC3jjIICIO9-lkQE3HCWrCLW4mig"
                />
                <VideoCard
                    title="I'm worried about humanity's future."
                    views="2.5M views"
                    timestamp="6 days ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLRuUSLSsLTqfVqbXW7dhQgkFEwSTF_VG2l4uD5CPA=s68-c-k-c0x00ffffff-no-rj"
                    channel="Mrwhosetheboss"
                    image="https://i.ytimg.com/vi/FZvee3-PEzo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA9Zn5N6x1mLd5LpItIkBfikW8fFQ"
                />
                <VideoCard
                    title="हिंदी Oggy and the Cockroaches 🍫🍿  Jam tartine 🍫🍿 Hindi Cartoons for Kids"
                    views="3.1M Views"
                    timestamp="1 month ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLQn3cabTHFXBVODrqdXpTVkKav5B5LwyabIQTJw=s68-c-k-c0x00ffffff-no-rj"
                    channel="Oggy Hindi - हिन्दी"
                    image="https://i.ytimg.com/vi/uw6lj4x6ZqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhGbLlt9md8mKEbmSr9rn1S_4kLg"
                />
                <VideoCard
                    title="Windows 11 is bigger than we thought"
                    views="3.7M Views"
                    timestamp="1 month ago"
                    channel_icon="https://yt3.ggpht.com/ytc/AKedOLTK0y25C0RJiEngT1ae9mrZLXIortPD-DKQxOlRkw=s68-c-k-c0x00ffffff-no-rj"
                    channel="Linus Tech Tips"
                    image="	https://i.ytimg.com/vi/-rwoPiM-8Qk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBmmf_tBgJmwKOFg_-In4YXBIUaew"
                />
                <VideoCard
                    title="Chandler & Joey being a comedic duo"
                    views="735K Views"
                    timestamp="8 months ago"
                    channel_icon="https://yt3.ggpht.com/ZBcf7Qhk9n3SJRbyTkRLbv0AHi5ouYIyYAIwBGVaQP-PGFP8x-EYlHPFbRMBu-SkeOd1NQV5dQ=s68-c-k-c0x00ffffff-no-rj"
                    channel="Beau-Marie"
                    image="https://i.ytimg.com/vi/jiFqTQdBXjo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAyFXZ3JBLpfg5Y5ePFKnZzoEdb6Q"
                />
            </VideoContainer>
        </RecommendedContainer>
    );
}

export default RecommendedVideos;
