import React from 'react'
import logo from './../../assets/logo.svg'
import SearchBar from './SearchBar.tsx/SearchBar';
// Material imports
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Header: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#3a3939",
      padding: "25px",
    }}>
      <Box component="img" src={logo} sx={{ width: "12rem" }}></Box>
      <SearchBar></SearchBar>
      <Box
        sx={{
          "& > *": {
            marginRight: "50px",
            backgroundImage: "linear-gradient(106.5deg, rgba(255, 215, 185, 0.8) 23%, rgba(223, 159, 247, 0.7) 93%);",
            backgroundSize: "100%",
            backgroundClip: "text",
            textFillColor: "transparent",
            "& *": { fill: "white" }
          },
          "& > *:hover": {
            backgroundImage: "linear-gradient(106.5deg, rgba(255, 215, 185, 1) 23%, rgba(223, 159, 247, 1) 93%);",
          }
        }}>
        <Button startIcon={<AddIcon/>}>Añadir receta</Button>
        <Button startIcon={<BookmarkIcon />}>Ver guardadas</Button>
      </Box>
    </Box >
  )
}

export default Header