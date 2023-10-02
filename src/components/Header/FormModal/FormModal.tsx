import React, { useState } from 'react'
import { FormModalProps } from '../../../interfaces/interfaces';
//Material components
import { Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { BoxStyled, ModalStyled, TextFieldStyled, ButtonStyled, ButtonContainer } from './style';

const FormModal: React.FC<FormModalProps> = ({ openModal, setOpenModal }) => {

    const [ingredientsQuantity, setIngredientsQuantity] = useState<number>(1)

    const tagList = [
        {
            label: "Title",
            type: "text"
        },
        {
            label: "URL",
            type: "url"
        },
        {
            label: "Image URL",
            type: "url"
        },
        {
            label: "Publisher",
            type: "text"
        },
        {
            label: "Preparation Time (in minutes)",
            type: "number"
        },
        {
            label: "Servings",
            type: "number"
        },
        {
            label: "Ingredients",
            type: "text",
            quantity: ingredientsQuantity
        },
    ];


    return (
        <ModalStyled
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <BoxStyled component="form" autoComplete="off">
                <Typography variant='h6'>RECIPE DATA</Typography>
                {tagList.map((tag, index) => (
                    tag.label !== "Ingredients" ? (
                        < TextFieldStyled
                            type={tag.type}
                            label={tag.label}
                            variant="filled"
                            size="small"
                            InputProps={{ inputProps: { min: 1 } }}
                        />
                    ) : ([
                        <Typography variant='h6'>INGREDIENTS</Typography>,
                        ...Array.from(Array(ingredientsQuantity).keys()).map(() => (
                            < TextFieldStyled
                                type='ur'
                                label=""
                                id="filled-hidden-label-small"
                                defaultValue="Small"
                                variant="filled"
                                size="small"
                            />
                        ))])
                ))}
                <ButtonContainer><ButtonStyled variant="contained" startIcon={<CloudUpload />} onClick={() => null}>Add</ButtonStyled></ButtonContainer>
            </BoxStyled>
        </ModalStyled>
    )
}

export default FormModal