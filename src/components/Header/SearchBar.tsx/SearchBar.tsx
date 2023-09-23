import { useRecetasContext } from '../../../context/RecetasProvider';
import { getRecipes } from '../../../services/services';
//Material imports
import { ButtonStyled, InputBaseStyled, PaperStyled } from './style';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const { recipeToSearch, setRecipeToSearch, setRecipesList, setAlertState } = useRecetasContext()

    const doGetRecipes = (query: string) => {
        getRecipes(query)
            .then((response: any) => {
                let data = response.data;
                if (data.results === 0) {
                    setAlertState({
                        active: true,
                        message: "No se han encontrado recetas",
                        severity: "error"
                    })
                    setRecipesList([])
                }
                else {
                    setAlertState({
                        active: true,
                        message: "Búsqueda exitosa",
                        severity: "success"
                    })
                    setRecipesList(data.data.recipes)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <PaperStyled component="form" noValidate autoComplete="off">
            <InputBaseStyled id="inputRecipe" placeholder="Buscá tu plato ideal" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipeToSearch(e.target.value)} />
            <ButtonStyled variant="contained" startIcon={<SearchIcon />} onClick={() => doGetRecipes(recipeToSearch)}>Buscar</ButtonStyled>
        </PaperStyled>
    )
}

export default SearchBar