import React, { createContext, useState, useContext } from "react"
import { defaultContextValuesTypes, RecetasProviderProps } from "../interfaces/interfaces"

const defaultContextValues: defaultContextValuesTypes = {
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
    loading: false,
    setLoading: () => {}
}

const RecetasContext = createContext(defaultContextValues)

export const useRecetasContext = () => useContext(RecetasContext)

const RecetasProvider: React.FC<RecetasProviderProps> = ({ children }) => {
    const [recipesList, setRecipesList] = useState(defaultContextValues.recipesList)
    const [alertState, setAlertState] = useState(defaultContextValues.alertState)
    const [recipe, setRecipe] = useState(defaultContextValues.recipe)
    const [loading, setLoading] = useState(defaultContextValues.loading)

    return (
        <RecetasContext.Provider value={{
            recipesList,
            setRecipesList,
            recipe,
            setRecipe,
            alertState,
            setAlertState,
            loading,
            setLoading,
        }}>
            {children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider