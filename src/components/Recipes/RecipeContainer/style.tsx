import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const RecipeContainerStyled = styled(Box)`
overflow: hidden;
width: 80%;
height: 100%;
display: flex;
align-items: start;
justify-content: center;
background-color: #f9f5f3;
`;

export const BoxStyled = styled(Box)`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
gap: 10px;
`;

export const WrapperImg = styled(Box)`
position: relative;
height: 40%;
&::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right bottom,rgba(121, 121, 121, 1),rgba(0, 0, 0, 1));
    background-image: linear-gradient(to right bottom,rgba(121, 121, 121, 1),rgba(0, 0, 0, 1));
    opacity: .3;
    z-index: 1
}
`;

interface BoxImgStyledProps {
    src: string,
    component: string
}

export const ImgStyled = styled(Box) <BoxImgStyledProps>`
height: 100%;
width: 100%;
object-fit: cover;
position: relative;
`;

export const TitleStyled = styled(Typography)`
width: 70%;
position: absolute;
transform: translate(-50%,20%) skewY(-6deg);
left: 50%;
bottom: 0;
color: #fff;
font-weight: 700;
font-size: 3.25rem;
text-transform: uppercase;
line-height: 1.95;
text-align: center;
`;

export const TypographyStyled = styled(Typography)`
background-image: linear-gradient(to right bottom,rgba(121, 121, 121, 1),rgba(0, 0, 0, 1));
padding: 1.3rem 2rem;
box-decoration-break: clone;
-webkit-box-decoration-break: clone;
`;

export const BoxStyled2 = styled(Box)`
display: flex;
gap: 10px;
align-items: center;
margin-top: 50px
`;