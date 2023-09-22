import React from 'react'
import { ListItemAvatar } from '@mui/material'
import { AvatarStyled, ListItemStyled, ListItemTextStyled } from './style'
import { RecipeProps } from '../../../interfaces/interfaces'

const ReceipeItem: React.FC<RecipeProps> = ({ image_url, publisher, title }) => {
  return (
    <>
      <ListItemStyled alignItems="flex-start">
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