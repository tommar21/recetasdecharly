import ReceipeItem from './RecipeItem/RecipeItem'
import { RecipeProps } from '../../interfaces/interfaces'
import { useRecetasContext } from '../../context/RecetasProvider'
//Material imports
import { Box } from '@mui/material'
import { BoxStyled, ListStyled } from './style'

const RecipesList = () => {
    const { recipes } = useRecetasContext()

    return (
        <BoxStyled>
            <ListStyled>
                {recipes?.map((recipe: RecipeProps) => <ReceipeItem key={recipe.id} image_url={recipe.image_url} publisher={recipe.publisher} title={recipe.title}></ReceipeItem>)}
            </ListStyled>
            <Box>

            </Box>
        </BoxStyled>
    )
}

export default RecipesList