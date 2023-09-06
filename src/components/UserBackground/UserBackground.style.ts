import styled from "styled-components";

export const BackgroundImage = styled.img`
    background-size: cover;
    width: calc(55vw + 113px);
    height: 50vh;
    object-fit: cover;
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    position: absolute;
    top: -56px;
    left: -8px;
`

export const BackgroundSlug = styled.div`
    width: calc(80vw + 113px);
    height: calc(15vw + 113px);
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    background-color: #ab51e3;
    position: absolute;
    top: -56px;
    left: -8px;
    text-align: center;
    line-height: calc(3.2vw + 100px);
    font-size: 50px;
    font-weight: 700;
    color: white;
`

export const BackgroundUploadInput = styled.input`
    cursor: pointer;
    width: calc(80vw + 113px);
    height: calc(15vw + 113px);
    position: absolute;
    top: -56px;
    left: -8px;
    opacity: 0.1;
`