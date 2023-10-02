import { AxiosResponse } from 'axios';
import { useRecetasContext } from '../../../context/RecetasProvider';
import { getRecipes } from '../../../services/services';
import { } from '../../../interfaces/interfaces';
//Material imports
import { ButtonStyled, InputBaseStyled, PaperStyled } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = () => {
    const { setRecipesList, setAlertState, setRecipe, setLoading } = useRecetasContext()
    const [recipeToSearch, setRecipeToSearch] = useState<string>("")

    const doGetRecipes = (query: string) => {
        setRecipe(null)
        setLoading(true)
        getRecipes(query)
            .then((response: AxiosResponse) => {
                const data = response.data;
                const recipesList = data.data.recipes
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
                    setRecipesList(recipesList)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => setLoading(false))
    }

    return (
        <PaperStyled component="form" noValidate autoComplete="off">
            <InputBaseStyled
                id="inputRecipe"
                placeholder="Buscá tu plato ideal"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.code === "Enter") {
                        e.preventDefault()
                        doGetRecipes(recipeToSearch)
                    }
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipeToSearch(e.target.value)}
            />
            <ButtonStyled variant="contained" startIcon={<SearchIcon />} onClick={() => doGetRecipes(recipeToSearch)}>Buscar</ButtonStyled>
        </PaperStyled>
    )
}

export default SearchBar