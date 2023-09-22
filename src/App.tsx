import React from 'react'
import Header from './components/Header/Header'
import RecipesList from './components/RecipesList/RecipesList'
import RecetasProvider from './context/RecetasProvider'
import { useRecetasContext } from './context/RecetasProvider'
//Material imports
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const App: React.FC = () => {
  const { openAlert, setOpenAlert, messageAlert } = useRecetasContext()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <RecetasProvider>
      <Header></Header>
      <RecipesList></RecipesList>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        message={messageAlert}
      
      >
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </MuiAlert>
      </Snackbar>
    </RecetasProvider>
  )
}

export default App