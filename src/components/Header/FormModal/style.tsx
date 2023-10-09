import { Box, Modal, TextField, Button, Typography } from '@mui/material'
import styled from 'styled-components'

interface BoxStyledProps {
    component: string;
    autoComplete: string
}

export const BoxStyled = styled(Box) <BoxStyledProps>`
width: 43rem;
height: 25rem;
overflow: hidden scroll !important;
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
padding: 2rem;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
gap: 10px 25px;
overflow: hidden;
box-shadow: 0 2rem 6rem 0.5rem rgba(0, 0, 0, .5);
background-color: white;
& h6 {
    width: 100%;
}
`;

export const ModalStyled = styled(Modal)`
display: flex;
justify-content: center;
align-items: center
`;


export const TextFieldStyled = styled(TextField)`
width: 13rem
`;

export const ButtonStyled = styled(Button)`
width: 8rem;
height: 100%;
border-radius: 50px !important;
font-weight: bold;
color: #3a3939;
background: linear-gradient(106.5deg, rgba(121, 121, 121, 0.8) 23%, rgba(0, 0, 0, 0.7) 93%);
&:hover: { 
    background: linear-gradient(106.5deg, rgba(121, 121, 121, 1) 23%, rgba(0, 0, 0, 1) 93%);
}
&:disabled {
    color: white !important;
}
`;

export const ButtonContainer = styled(Box)`
width: 100%;
padding-top: 50px;
text-align: center
`;

export const ButtonAdd = styled(Box)`
cursor: pointer;
margin-left: 10px;
transition: transform .2s !important;
&:hover {
    transform: scale(1.1)
 };
`;

export const TypographyStyled = styled(Typography)`
display: flex;
align-items: center;
gap: 1rem
`;