import { useRecetasContext } from '../../../context/RecetasProvider';
import { getRecipes } from '../../../services/services';
//Material imports
import { ButtonStyled, InputBaseStyled, PaperStyled } from './style';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const { recipeToSearch, setRecipeToSearch, setRecipes, setOpenAlert } = useRecetasContext()

    const doGetRecipes = (query: string) => {
        getRecipes(query)
            .then((response: any) => {
                let data = response.data;
                console.log(data)
                data.results === 0 ? setOpenAlert(true) : setRecipes(data.data.recipes)
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