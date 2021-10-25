import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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
            <VideoRow
                views="614K"
                time="3 days"
                channel="Alright!"
                title="Alright! | Date With Senior | Office Romance 2/2 | Ft. Anushka Sharma, Parikshit Joshi & Vikhyat G"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/EoXx-Y5OUQA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC37r9Foq1-Lvsb3Z_0X9r-wBv-sA"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="909K"
                time="6 days"
                channel="Alright!"
                title="Alright! | Date With Senior | Office Romance 1/2 | Ft. Anushka Sharma, Parikshit Joshi & Vikhyat G"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="	https://i.ytimg.com/vi/8_4oYzj61fs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAgOLmNAr4QIl3gIBezWw2QSGOygw"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="214K"
                time="1 week"
                channel="Alright!"
                title="Roomies In Mafialand | S03 | Official Trailer | Ft. Swagger Sharma, Nikhil Vijay & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/C8RKIBQoEng/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAWtpmNohcQ-Zeao6sgcwK8fkbzlQ"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="700K"
                time="1 week"
                channel="Alright!"
                title="Roomies Vs Police | Ep 3/3 | Roomies In Scamland | Ft. Swagger Sharma, Nikhil V & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="	https://i.ytimg.com/vi/X79turRdcM4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBGMDVvak6tXgyF_ztKIPZgqhs7Pw"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="1M"
                time="1 week"
                channel="Alright!"
                title="Roomies Vs Love | Ep 2/3 | Roomies In Scamland | Ft. Swagger Sharma, Nikhil Vijay & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/kf5nERp-sIM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD2vrvdTV_0Ft-4JAZ4SuvC0Rt-fQ"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="1M"
                time="2 weeks"
                channel="Alright!"
                title="Roomies Vs Scam | Ep 1/3 | Roomies In Scamland | Ft. Swagger Sharma, Nikhil Vijay & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="	https://i.ytimg.com/vi/qgUDJ0sC_xw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA5KW2Y1gPBjbRjdDrvcUrCmc6C1Q"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="224K"
                time="2 weeks"
                channel="Alright!"
                title="Roomies In Scamland | S02 | Official Trailer | Ft. Swagger Sharma, Nikhil Vijay & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="	https://i.ytimg.com/vi/WbMlxHTgDp4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDPktU2_Pyi7SBJ2fI-OB1Pa7MP5w"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="2M"
                time="2 weeks"
                channel="Alright!"
                title="Life Of An Average Guy | Ft. Abhishek Kapoor, Twarita Nagar & Santana Roach | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/myH3Oisz-tI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAIcg1ilSipUrFsdt95eiLptRjdlw"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="415K"
                time="3 weeks"
                channel="Alright!"
                title="When You Hire Your Bestfriend | Ep 2/2 | Office Days | Ft. Kritika Avasthi & Nikhil Vijay | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="	https://i.ytimg.com/vi/5DHpch_hmRY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDFaDxQHTl0DKsKIGRHngFdv1SQbg"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="164K"
                time="4 weeks"
                channel="Alright!"
                title="Roomies In Scamland | S02 | Official Teaser | Ft. @Swagger Sharma, Nikhil Vijay & Badri | Alright!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/GyngaA-iugs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALKuE4uvbRbj_pNe0CBoeek9mnhQ"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="1M"
                time="1 month"
                channel="Alright!"
                title="Alright! | What If Junior Becomes Boss? | Ft. Twarita Nagar, Abhishek Kapoor & Keshav Sadhna"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/GzLSv1asX58/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAHsZjUqvhOLGFOThP-VIBHm0RDSA"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
            <VideoRow
                views="2M"
                time="1 year"
                channel="Alright!"
                title="Alright! | Maths Ka Phobia | Ft. Parikshit Joshi & Revathi Pillai | Teacher's Day Special"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem ipsum dolorem corrupti! Praesentium corporis adipisci laudantium error esse iure tenetur pariatur nisi consequatur illo, reprehenderit explicabo vitae maxime assumenda!"
                image="https://i.ytimg.com/vi/fC8hVkR4F3s/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBJMm_U3t89ucgdLuBxJscMZspTkg"
                logo="https://yt3.ggpht.com/ytc/AKedOLTvp4FDWDA6GKmyY75k3aqW9Dxp0cdG3GTnJplb=s68-c-k-c0x00ffffff-no-rj"
            />
        </SearchPageContainer>
    );
}

export default SearchPage;
