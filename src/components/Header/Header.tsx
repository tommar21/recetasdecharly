import React, { useState } from 'react'
import logo from './../../assets/logo.svg'
import SearchBar from './SearchBar.tsx/SearchBar';
import RecipeItem from '../RecipeItem/RecipeItem';
import { RecipeItemProps } from '../../interfaces/interfaces';
import { useRecetasContext } from '../../context/RecetasProvider';
import FormModal from './FormModal/FormModal';
// Material imports
import { Button, ListItemIcon, ListItemText } from '@mui/material';
import { Bookmark, Add, WarningAmber } from '@mui/icons-material';
import { BoxStyled, BoxStyled2, MenuItemStyled, MenuBookmarks, Logo } from './style';

const Header: React.FC = () => {
  const { setRecipesList } = useRecetasContext()
  //for menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  //for modal
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <BoxStyled id='header'>
      <Logo component="img" src={logo}></Logo>
      <SearchBar></SearchBar>
      <BoxStyled2>
        <Button startIcon={<Add />} onClick={() => setOpenModal(true)}>Add recipe</Button>
        <Button startIcon={<Bookmark />} onClick={(event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)}>Bookmarks</Button>
        <MenuBookmarks
          anchorEl={anchorEl}
          open={openMenu}
          onClose={() => setAnchorEl(null)}
        >
          {localStorage.getItem("bookmarks") && JSON.parse(localStorage.getItem("bookmarks")!).length !== 0 ? (JSON.parse(localStorage.getItem("bookmarks")!).map((bookmark: RecipeItemProps, index: number) => (
            <RecipeItem
              id={bookmark.id}
              image_url={bookmark.image_url}
              publisher={bookmark.publisher}
              title={bookmark.title}
              onClick={() => {
                setAnchorEl(null)
                setRecipesList([])
              }}
              key={index}
            />
          ))) : (
            <MenuItemStyled>
              <ListItemIcon>
                <WarningAmber fontSize="small" />
              </ListItemIcon>
              <ListItemText>{"You don't have saved recipes yet. Find one you like and bookmark it. ;)"}</ListItemText>
            </MenuItemStyled>
          )}

        </MenuBookmarks>
      </BoxStyled2>
      <FormModal openModal={openModal} setOpenModal={setOpenModal} />
    </BoxStyled >
  )
}

export default Header