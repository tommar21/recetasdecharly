import React from 'react'
import logo from './../../assets/logo.svg'
import SearchBar from './SearchBar.tsx/SearchBar';
// Material imports
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { BoxStyled, BoxStyled2 } from './style';

const Header: React.FC = () => {
  return (
    <BoxStyled>
      <Box component="img" src={logo} sx={{ width: "12rem" }}></Box>
      <SearchBar></SearchBar>
      <BoxStyled2>
        <Button startIcon={<AddIcon />}>Añadir receta</Button>
        <Button startIcon={<BookmarkIcon />}>Ver guardadas</Button>
      </BoxStyled2>
    </BoxStyled >
  )
}

export default Header