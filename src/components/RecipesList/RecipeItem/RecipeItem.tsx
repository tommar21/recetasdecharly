import React from 'react'
import { ListItemAvatar } from '@mui/material'
import { AvatarStyled, ListItemStyled, ListItemTextStyled } from './style'
import { RecipeItemProps } from '../../../interfaces/interfaces'

const ReceipeItem: React.FC<RecipeItemProps> = ({ id, image_url, publisher, title, doGetARecipe }) => {
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