import ReceipeItem from './RecipeItem/RecipeItem'
import { RecipeItemProps } from '../../interfaces/interfaces'
import { useRecetasContext } from '../../context/RecetasProvider'
import { getARecipe } from '../../services/services'
//Material imports
import { Box } from '@mui/material'
import { BoxStyled, ListStyled } from './style'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const RecipesList = () => {
    const { alertState, setAlertState, recipesList } = useRecetasContext()

    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertState({
            active: false,
            message: "",
            severity: undefined
        });
    };

    const doGetARecipe = (id: string) => {
        getARecipe(id)
            .then((response: any) => {
                console.log(response)
                /* let data = response.data;
                if (data.results === 0) {
                    setAlertState({
                        active: true,
                        message: "No se han encontrado recetas",
                        severity: "error"
                    })
                    setRecipes([])
                }
                else {
                    setAlertState({
                        active: true,
                        message: "Búsqueda exitosa",
                        severity: "success"
                    })
                    setRecipes(data.data.recipes)
                } */
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <BoxStyled>
            <ListStyled>
                {recipesList?.map((recipe: RecipeItemProps) => <ReceipeItem key={recipe.id} doGetARecipe={doGetARecipe} id={recipe.id} image_url={recipe.image_url} publisher={recipe.publisher} title={recipe.title}></ReceipeItem>)}
            </ListStyled>
            <Box>

            </Box>
            <Snackbar
                open={alertState.active}
                autoHideDuration={10000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <MuiAlert onClose={handleCloseAlert} severity={alertState.severity} sx={{ width: '100%' }}>
                    {alertState.message}
                </MuiAlert>
            </Snackbar>
        </BoxStyled >
    )
}

export default RecipesList