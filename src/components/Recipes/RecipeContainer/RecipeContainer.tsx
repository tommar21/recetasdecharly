import React, { useEffect, useState } from 'react'
import { useRecetasContext } from '../../../context/RecetasProvider'
import { RecipeItemProps } from '../../../interfaces/interfaces';
//Material imports
import { RecipeContainerStyled, BoxStyled, BoxStyled2, DetailsContainer, IngredientsContainer, WrapperImg, ImgStyled, TitleStyled, TypographyStyled, TypographyStyled2, ButtonPeople, IconButtonStyled, InstructionsContainer, ButtonStyled } from './style'
import { SentimentSatisfiedAlt, AccessTime, PeopleOutline, AddCircleOutline, RemoveCircleOutline, BookmarkBorder, Done, East, Bookmark } from '@mui/icons-material/';
import { Typography, SvgIcon, Link } from '@mui/material'

const RecipeContainer = () => {
    const { recipe, setRecipe } = useRecetasContext()
    const [bookmarkActive, setBookmarkActive] = useState<boolean>(false)

    useEffect(() => {
        setBookmarkActive(Boolean(JSON.parse(localStorage.getItem('bookmarks')!)?.find((bookmark: RecipeItemProps) => bookmark.id === recipe?.id)))
    }, [recipe?.id])

    const changeServings = (adding: boolean) => {
        if (recipe) {
            //impedir restar si hay una persona
            if (recipe.servings === 1 && !adding) return
            //add or rest servings
            let newRecipe = { ...recipe, servings: adding ? recipe.servings + 1 : recipe.servings - 1 }
            //add or rest ingredients
            newRecipe.ingredients.forEach((ingredient) => {
                if (ingredient.quantity) ingredient.quantity = ((ingredient.quantity * newRecipe.servings) / recipe.servings)
            })
            //set recipe
            setRecipe(newRecipe)
        }
    }

    const setBookmarks = (bookmarkToSet: RecipeItemProps) => {
        let existingBookmarks: RecipeItemProps[] | null = JSON.parse(localStorage.getItem('bookmarks')!)

        localStorage.setItem("bookmarks", JSON.stringify(
            existingBookmarks ? (
                existingBookmarks.filter((existingBookmark) => existingBookmark.id === bookmarkToSet.id).length === 0 ?
                    existingBookmarks.concat([bookmarkToSet]) :
                    existingBookmarks.filter((existingBookmark) => existingBookmark.id !== bookmarkToSet.id)
            ) : [bookmarkToSet]
        ))

        setBookmarkActive(!bookmarkActive)
    }

    return (
        <RecipeContainerStyled>
            {recipe ? (
                <BoxStyled>
                    <WrapperImg>
                        <ImgStyled component="img" src={recipe.image_url}></ImgStyled>
                        <TitleStyled variant='h1'><TypographyStyled variant='body1' component="span">{recipe.title}</TypographyStyled></TitleStyled>
                    </WrapperImg>
                    <DetailsContainer>
                        <BoxStyled2>
                            <TypographyStyled2 variant="subtitle2">
                                <SvgIcon fontSize='large'>{<AccessTime />}</SvgIcon>
                                <Typography variant='subtitle2' component="span">{recipe.cooking_time}</Typography>
                                minutes
                            </TypographyStyled2>
                            <TypographyStyled2 variant="subtitle2">
                                <SvgIcon fontSize='large'>{<PeopleOutline />}</SvgIcon>
                                <Typography component="span">{recipe.servings}</Typography>
                                servings
                                <ButtonPeople fontSize='small' onClick={() => changeServings(true)}>{<AddCircleOutline />}</ButtonPeople>
                                <ButtonPeople fontSize='small' onClick={() => changeServings(false)}>{<RemoveCircleOutline />}</ButtonPeople>
                            </TypographyStyled2>
                        </BoxStyled2>
                        <IconButtonStyled
                            onClick={() => setBookmarks({
                                id: recipe.id,
                                image_url: recipe.image_url,
                                publisher: recipe.publisher,
                                title: recipe.title,
                            })}
                        >
                            {bookmarkActive ? <Bookmark /> : <BookmarkBorder />}
                        </IconButtonStyled>
                    </DetailsContainer>
                    <IngredientsContainer>
                        <Typography variant='h6'>Recipe ingredients</Typography>
                        {recipe.ingredients.map((ingredient, index) =>
                            <BoxStyled2 key={index}>
                                <SvgIcon fontSize='small'><Done></Done></SvgIcon>
                                <Typography variant="body2">{ingredient.quantity} {ingredient.unit} {ingredient.description}</Typography>
                            </BoxStyled2>)}
                    </IngredientsContainer>
                    <InstructionsContainer>
                        <Typography variant='h6'>HOW TO COOK IT</Typography>
                        <Typography variant="body2">This recipe was carefully designed and tested by <Typography component={"span"}>{recipe.publisher}</Typography>.  Please check out directions at their website.</Typography>
                        <ButtonStyled variant="contained" endIcon={<East />}>
                            <Link href={recipe.source_url} target="_blank" rel="noreferrer">Instructions</Link>
                        </ButtonStyled>
                    </InstructionsContainer>
                </BoxStyled>

            ) : (
                <BoxStyled2>
                    <SvgIcon fontSize='large'><SentimentSatisfiedAlt></SentimentSatisfiedAlt></SvgIcon>
                    <Typography variant="h6">{"Start by searching for a recipe or an ingredient. Have fun!"}</Typography>
                </BoxStyled2>
            )
            }
        </RecipeContainerStyled >
    )
}

export default RecipeContainer