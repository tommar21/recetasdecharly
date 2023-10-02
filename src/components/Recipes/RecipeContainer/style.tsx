import { Box, Typography, IconButton, Button } from "@mui/material";
import styled from "styled-components";

//main

export const RecipeContainerStyled = styled(Box)`
overflow: hidden;
width: 65%;
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
gap: 25px;
overflow: hidden scroll;
scrollbar-width: thin;
scrollbar-color: transparent;  
&::-webkit-scrollbar {
    width: 8px;
};
&::-webkit-scrollbar-track {
    background: transparent;
};
&::-webkit-scrollbar-thumb {
    background-color: #1976d2 !important;
    background: linear-gradient(106.5deg, rgba(121, 121, 121, 0.8) 23%, rgba(0, 0, 0, 0.8) 93%);
    border-radius: 20px;
};
`;

//img section

export const WrapperImg = styled(Box)`
position: relative;
height: 35%;
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

//title section

export const TitleStyled = styled(Typography)`
width: 50%;
position: absolute;
z-index: 1;
transform: translate(-50%,20%) skewY(-6deg);
left: 50%;
bottom: 0;
color: #fff;
text-transform: uppercase;
line-height: .40 !important;
text-align: center;
`;

interface TypographyStyledProps {
    variant: string,
    component: string
}

export const TypographyStyled = styled(Typography) <TypographyStyledProps>`
background-image: linear-gradient(to right bottom,rgba(121, 121, 121, .9),rgba(0, 0, 0, .8));
background-color: #1976d2 !important;
padding: 1.3rem 2rem;
box-decoration-break: clone;
-webkit-box-decoration-break: clone;
font-weight: 700 !important;
font-size: 1.25rem !important;
`;

//norecipe container, detail item and ingredient item

export const BoxStyled2 = styled(Box)`
display: flex;
gap: 10px;
align-items: center;
margin-top: 50px;
`;

//details section

export const DetailsContainer = styled(Box)`
display: flex;
padding: 0 2.5rem;
justify-content: space-between
`;

export const TypographyStyled2 = styled(Typography)`
text-transform: uppercase;
display: flex;
align-items: center;
margin-right: 20px !important;
font-weight: 400 !important;
& > span {
    font-weight: bold;
    margin: 0 5px 0 10px
};
& > svg {
    margin-left: 5px
}
`;

export const ButtonPeople = styled(Box)`
cursor: pointer;
margin-left: 10px;
transition: transform .2s !important;
&:hover {
    transform: scale(1.1)
 };
`;

export const IconButtonStyled = styled(IconButton)`
background-color: #1976d2 !important;
background: linear-gradient(
    106.5deg,
    rgba(121, 121, 121, 0.8) 23%,
    rgba(0, 0, 0, 0.8) 93%
);
margin-top: 50px !important;
transition: transform .2s !important;
&:hover {
    transform: scale(1.1)
 };
 & svg{
    fill: white !important
 };
`;

//ingredients section

export const IngredientsContainer = styled(Box)`
display: flex;
padding: 2.5rem;
justify-content: center;
flex-wrap: wrap;
justify-content: start;
background-color: #f2efee;
& > h6 {
    width: 100%;
    text-align: center;
};
& > div {
    margin-top: 25px;
    width: 50%
}
`;

//how to cook it section

export const InstructionsContainer = styled(Box)`
display: flex;
flex-direction: column;
padding: 2.5rem;
align-items: center;
text-align: center;
gap: 25px;
& span {
    font-weight: 700
}
`;

export const ButtonStyled = styled(Button)`
border-radius: 50px !important;
background-color: #1976d2 !important;
  background: linear-gradient(
    106.5deg,
    rgba(121, 121, 121, 0.8) 23%,
    rgba(0, 0, 0, 0.8) 93%
  );
  font-size: 0.8rem !important;
  & > a { 
    color: white !important;;
    text-decoration: none
  }
`;