import React from 'react'
//Material imports
import { Button, Paper, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
    return (
        <Paper
            component="form"
            sx={{
                width: '40rem',
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "50px",
                borderRadius: "50px"
            }}
            noValidate
            autoComplete="off"
        >
            <InputBase
                id="inputRecipe"
                placeholder="Buscá tu plato ideal"
                sx={{ padding: "15px" }}
            />
            <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                    width:"10rem",
                    height: "100%",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    color: "#3a3939",
                    background: "linear-gradient(106.5deg, rgba(255, 215, 185, 0.8) 23%, rgba(223, 159, 247, 0.7) 93%);",
                    "&:hover": { background: "linear-gradient(106.5deg, rgba(255, 215, 185, 1) 23%, rgba(223, 159, 247, 1) 93%);" }
                }}>Buscar</Button>
        </Paper>
    )
}

export default SearchBar