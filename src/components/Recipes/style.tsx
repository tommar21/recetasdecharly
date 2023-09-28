import { List, Box } from "@mui/material";
import styled from "styled-components";

export const ListStyled = styled(List)`
padding-top: 5px !important;
width: 30%;
border-right: 1px solid rgba(0, 0, 0, 0.06); 
background-color: #fff;
height: 100%;
overflow: hidden
`;

export const BoxStyled = styled(Box)`
display: flex;
flex-grow: 1;
overflow: hidden
`;