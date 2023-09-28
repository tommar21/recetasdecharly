import { Dispatch, SetStateAction } from "react"

export interface RecipeItemProps {
  id: string,
  image_url: string,
  publisher: string,
  title: string,
}

export interface RecipeProps extends RecipeItemProps{
  servings: number,
  source_url: string,
  cooking_time: number,
  ingredients: {
    quantity: number | null,
    unit: string,
    description: string
  }
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
  recipe: RecipeProps | null,
  setRecipe: Dispatch<SetStateAction<RecipeProps | null>>,
  alertState: alertStateProps,
  setAlertState: Dispatch<SetStateAction<alertStateProps>>,
}