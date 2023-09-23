import React, { createContext, useState, useContext } from "react"
import { defaultContextValuesTypes, RecetasProviderProps } from "../interfaces/interfaces"

const defaultContextValues: defaultContextValuesTypes = {
    recipeToSearch: "",
    setRecipeToSearch: () => { },
    recipesList: [],
    setRecipesList: () => { },
    recipe: null,
    setRecipe: () => { },
    alertState: {
        active: false,
        message: "",
        severity: undefined
    },
    setAlertState: () => { },
}

const RecetasContext = createContext(defaultContextValues)

export const useRecetasContext = () => useContext(RecetasContext)

const RecetasProvider: React.FC<RecetasProviderProps> = ({ children }) => {
    const [recipeToSearch, setRecipeToSearch] = useState(defaultContextValues.recipeToSearch)
    const [recipesList, setRecipesList] = useState(defaultContextValues.recipesList)
    const [alertState, setAlertState] = useState(defaultContextValues.alertState)
    const [recipe, setRecipe] = useState(defaultContextValues.recipe)

    return (
        <RecetasContext.Provider value={{
            recipeToSearch,
            setRecipeToSearch,
            recipesList,
            setRecipesList,
            recipe,
            setRecipe,
            alertState,
            setAlertState,
        }}>
            {children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider