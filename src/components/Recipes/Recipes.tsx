import ReceipeItem from './RecipeItem/RecipeItem'
import { RecipeItemProps } from '../../interfaces/interfaces'
import { useRecetasContext } from '../../context/RecetasProvider'
//Material imports
import { BoxStyled, ListStyled } from './style'
import RecipeContainer from './RecipeContainer/RecipeContainer';

const RecipesList = () => {
    const { recipesList } = useRecetasContext()

    return (
        <BoxStyled>
            <ListStyled>
                {recipesList.map((recipe: RecipeItemProps) => <ReceipeItem key={recipe.id} id={recipe.id} image_url={recipe.image_url} publisher={recipe.publisher} title={recipe.title}></ReceipeItem>)}
            </ListStyled>
            <RecipeContainer />
        </BoxStyled >
    )
}

export default RecipesList