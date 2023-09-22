import { Box } from '@mui/material';
import styled from 'styled-components';

export const BoxStyled = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
background-color: #f9f5f3
`;

export const BoxStyled2 = styled(Box)`
& > * {
    margin-right: 50px !important;
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