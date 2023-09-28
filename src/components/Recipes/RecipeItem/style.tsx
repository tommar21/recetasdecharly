import { ListItemText, Avatar, ListItem } from '@mui/material'
import styled from 'styled-components'

export const AvatarStyled = styled(Avatar)`
width: 50px !important;
height: 50px !important;
margin-right: 10px;
&::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right bottom,rgba(121, 121, 121, 1),rgba(0, 0, 0, 1));
    opacity: .3;
}
`;

export const ListItemTextStyled = styled(ListItemText)`
text-transform: uppercase;
 & span {
    height: 25px;
    overflow: hidden;
 }
`;

export const ListItemStyled = styled(ListItem)`
padding: 10px 16px !important;
&:hover {
    transition: transform 0.2s;
    background-color: #f9f5f3;
    transform: translateY(-4px)
}
`;
