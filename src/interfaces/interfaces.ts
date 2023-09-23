import { Dispatch, SetStateAction } from "react"

export interface RecipeItemProps {
  id: string,
  image_url: string,
  publisher: string,
  title: string,
  doGetARecipe: (id: string) => void
}

export interface RecipeProps {

}

export interface RecetasProviderProps {
  children: JSX.Element | JSX.Element[]
}

interface alertStateProps {
  active: boolean,
  message: string,
  severity: "success" | "error" | "warning" | "info" | undefined
}

export interface defaultContextValuesTypes {
  recipeToSearch: string,
  setRecipeToSearch: Dispatch<SetStateAction<string>>,
  recipesList: RecipeItemProps[] | never[],
  setRecipesList: Dispatch<SetStateAction<RecipeItemProps[] | never[]>>,
  recipe: RecipeItemProps | null,
  setRecipe: Dispatch<SetStateAction<RecipeItemProps | null>>,
  alertState: alertStateProps,
  setAlertState: Dispatch<SetStateAction<alertStateProps>>,
}