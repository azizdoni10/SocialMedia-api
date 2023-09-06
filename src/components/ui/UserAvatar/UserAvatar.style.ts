import styled from "styled-components";

export const AvatarImage = styled.img`
    width: calc(3.2vw + 113px); 
    height: calc(3.2vw + 113px);
    object-fit: cover;
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    position: absolute;
    top: -56px;
    left: 30px;
`

export const AvatarSlug = styled.div`
    width: calc(3.2vw + 113px);
    height: calc(3.2vw + 113px);
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    background-color: #ab51e3;
    position: absolute;
    top: -56px;
    left: 30px;
    text-align: center;
    line-height: calc(3.2vw + 100px);
    font-size: 50px;
    font-weight: 700;
    color: white;
`

export const AvatarUploadInput = styled.input`
    cursor: pointer;
    width: calc(3.2vw + 113px);
    height: calc(3.2vw + 113px);
    position: absolute;
    top: -56px;
    left: 30px;
    opacity: 0;
    border-radius: 50%;

`