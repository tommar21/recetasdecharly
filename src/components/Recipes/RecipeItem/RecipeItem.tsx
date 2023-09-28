import React from 'react'
import { RecipeItemProps, RecipeProps } from '../../../interfaces/interfaces'
import { getARecipe } from '../../../services/services'
import { AxiosResponse } from 'axios'
import { useRecetasContext } from '../../../context/RecetasProvider'
//Material imports
import { AvatarStyled, ListItemStyled, ListItemTextStyled } from './style'
import { ListItemAvatar } from '@mui/material'

const ReceipeItem: React.FC<RecipeItemProps> = ({ id, image_url, publisher, title }) => {

  const { setRecipe } = useRecetasContext()

  const doGetARecipe = (id: string) => {
    getARecipe(id)
      .then((response: AxiosResponse) => {
        let recipeObtained: RecipeProps = response.data.data.recipe;
        setRecipe(recipeObtained)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <>
      <ListItemStyled alignItems="flex-start" onClick={() => { doGetARecipe(id) }}>
        <ListItemAvatar>
          <AvatarStyled alt="Receta" src={image_url} />
        </ListItemAvatar>
        <ListItemTextStyled
          primary={title}
          secondary={publisher}
        />
      </ListItemStyled>
    </>
  )
}

export default ReceipeItem