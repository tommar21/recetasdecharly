import React from 'react'
import { useRecetasContext } from '../../../context/RecetasProvider'
//Material imports
import { RecipeContainerStyled, BoxStyled, BoxStyled2, WrapperImg, ImgStyled, TitleStyled } from './style'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Box, Typography, SvgIcon } from '@mui/material'

const RecipeContainer = () => {
    const { recipe } = useRecetasContext()

    return (
        <RecipeContainerStyled>
            {recipe ? (
                <BoxStyled>
                    <WrapperImg>
                        <ImgStyled component="img" src={recipe.image_url}></ImgStyled>
                        <TitleStyled>{recipe.title}</TitleStyled>
                    </WrapperImg>
                </BoxStyled>

            ) : (
                <BoxStyled2>
                    <SvgIcon fontSize='large'><SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon></SvgIcon>
                    <Typography variant="h6">{"Podés empezar por buscar una receta o ingrediente (en inglés)"}</Typography>
                </BoxStyled2>
            )}
        </RecipeContainerStyled>
    )
}

export default RecipeContainer