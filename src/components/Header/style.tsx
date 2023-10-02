import { Box, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
border-bottom: 1px solid rgba(0,0,0,0.06);
background-color: #f9f5f3;
`;

interface LogoProps {
    src: string,
    component: string
}

export const Logo = styled(Box) <LogoProps>`
width: 12rem
`;

export const BoxStyled2 = styled(Box)`
& > * {
    margin-right: 20px !important;
    background-image: linear-gradient(106.5deg, rgba(121, 121, 121, 0.8) 23%, rgba(0, 0, 0, 0.7) 93%);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    & * { 
        fill: rgba(0, 0, 0, 0.7)
    }
};
& > *:hover {
    background-image: linear-gradient(106.5deg, rgba(121, 121, 121, 1) 23%, rgba(0, 0, 0, 1) 93%);
    & * { 
        fill: rgba(0, 0, 0, 1)
    }
}
`;

export const MenuBookmarks = styled(Menu)`
& ul {
    max-height: 20rem;
    width: 30rem;
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
}
`;

export const MenuItemStyled = styled(MenuItem)`
white-space: wrap !important 
`;