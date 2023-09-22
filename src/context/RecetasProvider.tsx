import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react"
import { RecipeProps } from "../interfaces/interfaces"

interface RecetasProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface defaultContextValuesTypes {
    recipeToSearch: string,
    setRecipeToSearch: Dispatch<SetStateAction<string>>,
    recipes: RecipeProps[] | never[],
    setRecipes: Dispatch<SetStateAction<RecipeProps[] | never[]>>,
    openAlert: boolean,
    setOpenAlert: Dispatch<SetStateAction<boolean>>,
    messageAlert: string,
    setMessageAlert: Dispatch<SetStateAction<string>>,
}

const defaultContextValues: defaultContextValuesTypes = {
    recipeToSearch: "",
    setRecipeToSearch: () => { },
    recipes: [],
    setRecipes: () => { },
    openAlert: true,
    setOpenAlert: () => { },
    messageAlert: "",
    setMessageAlert: () => { }
}

const RecetasContext = createContext(defaultContextValues)

export const useRecetasContext = () => useContext(RecetasContext)

const RecetasProvider: React.FC<RecetasProviderProps> = ({ children }) => {
    const [recipeToSearch, setRecipeToSearch] = useState(defaultContextValues.recipeToSearch)
    const [recipes, setRecipes] = useState(defaultContextValues.recipes)
    const [openAlert, setOpenAlert] = useState(defaultContextValues.openAlert)
    const [messageAlert, setMessageAlert] = useState(defaultContextValues.messageAlert)


    return (
        <RecetasContext.Provider value={{
            recipeToSearch,
            setRecipeToSearch,
            recipes,
            setRecipes,
            openAlert,
            setOpenAlert,
            messageAlert,
            setMessageAlert
        }}>
            {children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider