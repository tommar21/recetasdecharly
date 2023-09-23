import axios from 'axios'

export const getRecipes = (query: string) => axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`)

export const getARecipe = (id: string) => axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
