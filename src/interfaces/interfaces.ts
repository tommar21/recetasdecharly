import React, { Dispatch, SetStateAction } from "react"

export interface TypographyIconProps {
  children: string;
  span: number;
  icon: React.JSX.Element;
  variant: "h1" | 'h2' | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2"
}

export interface FormModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>,
}

export interface RecipeItemProps {
  id: string,
  image_url: string,
  publisher: string,
  title: string,
  onClick?: () => void
}

export interface RecipeProps extends RecipeItemProps {
  servings: number,
  source_url: string,
  cooking_time: number,
  ingredients: {
    quantity: number | null,
    unit: string,
    description: string
  }[]
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
  recipesList: RecipeItemProps[] | never[],
  setRecipesList: Dispatch<SetStateAction<RecipeItemProps[] | never[]>>,
  recipe: RecipeProps | null,
  setRecipe: Dispatch<SetStateAction<RecipeProps | null>>,
  alertState: alertStateProps,
  setAlertState: Dispatch<SetStateAction<alertStateProps>>,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
}