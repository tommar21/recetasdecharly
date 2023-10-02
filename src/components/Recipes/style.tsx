import { List, Box, Link } from "@mui/material";
import styled from "styled-components";

export const ListStyled = styled(List)`
padding-top: 5px !important;
width: 35%;
border-right: 1px solid rgba(0, 0, 0, 0.06); 
background-color: #fff;
height: 100%;
overflow: hidden scroll;
scrollbar-width: thin;
scrollbar-color: transparent;  
&::-webkit-scrollbar {
    width: 8px;
} 
&::-webkit-scrollbar-track {
    background: transparent;
} 
&::-webkit-scrollbar-thumb {
    background-color: #1976d2 !important;
    background: linear-gradient(106.5deg, rgba(121, 121, 121, 0.8) 23%, rgba(0, 0, 0, 0.8) 93%);
    border-radius: 20px;
}
`;

export const BoxStyled = styled(Box)`
display: flex;
flex-grow: 1;
overflow: hidden
`;

export const BoxStyled2 = styled(Box)`
width: 85%;
display: flex;
gap: 10px;
align-items: start;
justify-content: center;
margin-top: 50px;
margin: 25px auto;
& svg {
    color: gray !important
}
`;

export const LinkStyled = styled(Link)`
background-image: linear-gradient(106.5deg, rgba(121, 121, 121, 0.7) 23%, rgba(0, 0, 0, 0.4) 93%);
background-size: 100%;
background-clip: text;
-webkit-background-clip: text;
text-fill-color: transparent;
-webkit-text-fill-color: transparent;
background-color: #1976d2;
`;