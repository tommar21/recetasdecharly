import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useRecetasContext } from '../../context/RecetasProvider'
import Header from '../Header/Header'
import Recipes from '../Recipes/Recipes'
//Material imports
import { Main } from './style';

const Wrapper = () => {

    const { alertState, setAlertState } = useRecetasContext()

    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertState({
            active: false,
            message: "",
            severity: undefined
        });
    };

    return (
        <>
            <Main>
                <Header></Header>
                <Recipes></Recipes>
            </Main>
            <Snackbar
                open={alertState.active}
                autoHideDuration={5000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <MuiAlert onClose={handleCloseAlert} severity={alertState.severity} sx={{ width: '100%' }}>
                    {alertState.message}
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default Wrapper