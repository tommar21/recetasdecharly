import { Box, Modal, TextField, Button } from '@mui/material'
import styled from 'styled-components'

interface BoxStyledProps {
    component: string;
    autoComplete: string
}

export const BoxStyled = styled(Box) <BoxStyledProps>`
width: 30rem;
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
`;

export const ButtonContainer = styled(Box)`
width: 100%;
padding-top: 50px;
text-align: center
`;