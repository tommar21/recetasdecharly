import React, { useState } from 'react'
import { FormModalProps } from '../../../interfaces/interfaces';
//Material components
import { Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { BoxStyled, ModalStyled, TextFieldStyled, ButtonStyled, ButtonContainer } from './style';

const FormModal: React.FC<FormModalProps> = ({ openModal, setOpenModal }) => {

    const tagListDefault = [
        {
            label: "Title",
            type: "text",
            value: ""
        },
        {
            label: "URL",
            type: "url",
            value: ""
        },
        {
            label: "Image URL",
            type: "url",
            value: ""
        },
        {
            label: "Publisher",
            type: "text",
            value: ""
        },
        {
            label: "Preparation Time (in minutes)",
            type: "number",
            value: ""
        },
        {
            label: "Servings",
            type: "number",
            value: ""
        },
        {
            label: "Ingredients",
            type: "text",
            value: [""]
        },
    ];

    const [tagList, setTagList] = useState(tagListDefault)

    const setTagValue = (indexTag: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const isAnIngredient = Array.from(event.currentTarget.labels!)[0].textContent!.includes("Ingredient");
        const tagListToBeSetted = [...tagList];
        tagListToBeSetted.forEach((tag, index) => {
            if (isAnIngredient && tag.label === "Ingredients" && Array.isArray(tag.value)) tag.value[indexTag] = event.currentTarget.value
            else if (!isAnIngredient && index === indexTag) tag.value = event.currentTarget.value
        })
        setTagList(tagListToBeSetted)
        console.log(tagList, tagListToBeSetted)
    }


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
                    tag.label === "Ingredients" && Array.isArray(tag.value) ? ([
                        <Typography key={index} variant='h6'>INGREDIENTS</Typography>,
                        ...tag.value.map((ingredient, index) => (
                            < TextFieldStyled
                                type={tag.type}
                                key={index}
                                label={`Ingredient ${index + 1}`}
                                onChange={(event) => setTagValue(index, event)}
                                required
                                variant="filled"
                                size="small"
                            />
                        ))]) : (
                        < TextFieldStyled
                            type={tag.type}
                            label={tag.label}
                            onChange={(event) => setTagValue(index, event)}
                            variant="filled"
                            key={index}
                            size="small"
                            required
                            InputProps={{ inputProps: { min: 1 } }}
                        />
                    )
                ))}
                <ButtonContainer><ButtonStyled variant="contained" startIcon={<CloudUpload />} onClick={() => null}>Add</ButtonStyled></ButtonContainer>
            </BoxStyled>
        </ModalStyled>
    )
}

export default FormModal