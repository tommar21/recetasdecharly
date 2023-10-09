import axios from 'axios'

export const getRecipes = (query: string) => axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`)

export const getARecipe = (id: string) => axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)

export const postRecipe = (recipe: any) => axios.post(`https://forkify-api.herokuapp.com/api/v2/recipes/?key=5f16d103-20cb-466b-b96c-b770a817275b`, recipe)