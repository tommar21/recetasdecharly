import { Button, Paper, InputBase } from '@mui/material'
import styled from 'styled-components'

export const ButtonStyled = styled(Button)`
width: 12rem;
height: 100%;
border-radius: 50px !important;
font-weight: bold;
color: #3a3939;
background: linear-gradient(106.5deg, rgba(121, 121, 121, 0.8) 23%, rgba(0, 0, 0, 0.7) 93%);
&:hover: { 
    background: linear-gradient(106.5deg, rgba(121, 121, 121, 1) 23%, rgba(0, 0, 0, 1) 93%);
}
`;

export const InputBaseStyled = styled(InputBase)`
padding: 15px;
 width: 100%; 
`;

interface PaperProps {
    component?: string,
    noValidate?: boolean,
    autoComplete?: string,
};

export const PaperStyled = styled(Paper)<PaperProps>`
width: 30rem;
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
border-radius: 50px !important;
box-shadow: none !important;
border: 1px solid rgba(0,0,0,0.14);
`;