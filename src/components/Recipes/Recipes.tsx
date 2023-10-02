import ReceipeItem from '../RecipeItem/RecipeItem'
import { RecipeItemProps } from '../../interfaces/interfaces'
import { useRecetasContext } from '../../context/RecetasProvider'
//Material imports
import { BoxStyled, ListStyled, BoxStyled2, LinkStyled } from './style'
import RecipeContainer from './RecipeContainer/RecipeContainer';
import { Typography, SvgIcon, CircularProgress } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const RecipesList = () => {
    const { recipesList, loading } = useRecetasContext()

    return (
        <BoxStyled>
            <ListStyled>
                {!loading ? (
                    recipesList.length !== 0 ? (
                        recipesList.map((recipe: RecipeItemProps) =>
                            <ReceipeItem key={recipe.id} id={recipe.id} image_url={recipe.image_url} publisher={recipe.publisher} title={recipe.title} />
                        )) : (
                        <BoxStyled2>
                            <SvgIcon fontSize='large'><SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon></SvgIcon>
                            <Typography variant="h6">{'Los términos de búsqueda son limitados. Buscá "pizza" u otra comida de esta '}<LinkStyled href="https://forkify-api.herokuapp.com/phrases.html" target="_blank" rel="noreferrer" underline='none'>lista</LinkStyled> </Typography>
                        </BoxStyled2>
                    )) : (
                    <BoxStyled2>
                        <CircularProgress/>
                    </BoxStyled2>
                )}
            </ListStyled>
            <RecipeContainer />
        </BoxStyled >
    )
}

export default RecipesList