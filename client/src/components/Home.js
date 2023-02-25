import React, { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const { v4: uuidV4 } = require('uuid')

const HomePage = () => {

    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() => {
        const roomId = uuidV4();
        navigate(`/videocall/${roomId}`)
    }, [navigate]);


    return (
        <ContainerHome>
            <Header>Chaterio</Header>
            <SectionOuterButtons>
                <SectionInnerButtons>

                    <a href="/chaterio"><RoomButton>New Room</RoomButton></a>
                    <a href="/room"><RoomButton>Join Room</RoomButton></a>

                </SectionInnerButtons>
            </SectionOuterButtons>

            <SectionSearch>
                <InputField id="RoomName" name="RoomName" type="text" placeholder="Enter Room Code"></InputField>
                <SubmitButton onClick={handleJoinRoom} type="submit">Start meeting</SubmitButton>
            </SectionSearch>


        </ContainerHome>
    );
};

const InputField = styled.input`
    border: none;
    border-radius: 2vw;
    font-size: 18px;
    height: 8vh;
    width: 70vw;
    margin-bottom: 3vh;
    padding-left: 5vw;
`;

const SubmitButton = styled.button`
    background-color: #10C2C9;
    border: none;
    border-radius: 2vw;
    border: none;
    border-radius: 2vw;
    font-size: 18px;
    font-weight: 600;
    color: white;
    height: 8vh;
    width: 70vw;
    margin-bottom: 3vh;
    padding-left: 5vw;
`;


const SectionSearch = styled.section`
    height: 20vh;
    margin-top: 17vh;
    text-align: center;
`;

const RoomButton = styled.button`
    background-color: #10C2C9;
    border: none;
    border-radius: 2vw;
    height: 8vh;
    width: 37vw;
    margin-left: 3vw;
    margin-right: 3vw;
    font-size: 18px;
    font-weight: 600;
    color: white;
`;


const SectionInnerButtons = styled.section`
    width: 90%;
    margin: auto;
`;

const SectionOuterButtons = styled.section`
    height: 9vh;
    text-align: center;
`;


const Header = styled.h1`
    color:  #d9005a;
    margin-top: 0;
    font-size: 57px;
    padding-top: 2vh;
    text-align: center;
`;


const ContainerHome = styled.div`
    background-color: #252934;
    min-height: 100vh;
`;



export default HomePage;