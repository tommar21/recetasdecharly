import React, { useState, useEffect } from 'react'
import { FormModalProps } from '../../../interfaces/interfaces';
//Material components
import { Typography, InputAdornment, IconButton } from '@mui/material';
import { CloudUpload, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { BoxStyled, ModalStyled, TextFieldStyled, ButtonStyled, ButtonContainer, ButtonAdd, TypographyStyled } from './style';

const FormModal: React.FC<FormModalProps> = ({ openModal, setOpenModal }) => {

    const tagListDefault: { tag: string, label: string, type: string, value: any }[] = [
        {
            tag: "title",
            label: "Title",
            type: "text",
            value: ""
        },
        {
            tag: "sourceUrl",
            label: "URL",
            type: "url",
            value: ""
        },
        {
            tag: "image",
            label: "Image URL",
            type: "url",
            value: ""
        },
        {
            tag: "publisher",
            label: "Publisher",
            type: "text",
            value: ""
        },
        {
            tag: "cookingTime",
            label: "Cooking Time (in minutes)",
            type: "number",
            value: ""
        },
        {
            tag: "servings",
            label: "Servings",
            type: "number",
            value: ""
        },
        {
            tag: "ingredients",
            label: "Ingredients",
            type: "text",
            value: ["", "", ""]
        },
    ];

    const tagsErrorsDefault = {
        title: "Required",
        sourceUrl: "Required",
        image: "Required",
        publisher: "Required",
        servings: "Required",
        cookingTime: "Required",
        ingredient1: "Required",
        ingredient2: "Required",
        ingredient3: "Required",
    };

    const [tagList, setTagList] = useState(tagListDefault)
    const [tagsErrors, setTagsErrors] = useState(tagsErrorsDefault)

    const validateTagValue = () => {

    }

    const onInputChange = (indexTag: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isAnIngredient?: true) => {
        //setTagValue
        const tagListToBeSetted = [...tagList];
        tagListToBeSetted.forEach((tag, index) => {
            if (isAnIngredient && tag.label === "Ingredients" && Array.isArray(tag.value)) tag.value[indexTag] = event.currentTarget.value
            else if (!isAnIngredient && index === indexTag) tag.value = event.currentTarget.value
        })
        setTagList(tagListToBeSetted)

        //setTagError
        const tagsErrorsToBeSetted = { ...tagsErrors };
        validateTagValue()

    }

    const addIngredient = () => {
        //set new ingredient
        const tagListToBeSetted = tagList.filter((tag) => tag.label !== "Ingredients");
        const ingredients = tagList.find(tag => tag.label === "Ingredients")!
        ingredients.value.push("")
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
        //set ingredient error
        const tagsErrorsToBeSetted = { ...tagsErrors };
        Object.defineProperty(tagsErrorsToBeSetted, `ingredient${ingredients.value.length}`, { value: "Required", writable: true, enumerable: true })
        setTagsErrors(tagsErrorsToBeSetted)
    }

    const deleteIngredient = (indexIngredient: number) => {
        const tagListToBeSetted = tagList.filter((tag) => tag.label !== "Ingredients");
        const ingredients = tagList.find(tag => tag.label === "Ingredients")!
        ingredients.value.splice(indexIngredient, 1)
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
        // delete tag error
        const tagsErrorsToBeSetted = { ...tagsErrors };
        if (tagsErrorsToBeSetted.hasOwnProperty(`ingredient${indexIngredient + 1}`))
            delete tagsErrorsToBeSetted[`ingredient${indexIngredient + 1}` as keyof typeof tagsErrorsToBeSetted];
        setTagsErrors(tagsErrorsToBeSetted)
        console.log(tagsErrorsToBeSetted)
    }

    useEffect(() => {
        tagList.forEach(item => {
            
        })
    }, [tagList])

    return (
        <ModalStyled open={openModal} onClose={() => setOpenModal(false)}>
            <BoxStyled component="form" autoComplete="off">
                <Typography variant='h6'>RECIPE DATA</Typography>
                {tagList.map((item, index) => (
                    item.label !== "Ingredients" ? (
                        < TextFieldStyled
                            type={item.type}
                            label={item.label}
                            onChange={(event) => onInputChange(index, event)}
                            variant="outlined"
                            key={index}
                            size="small"
                            required
                            helperText={tagsErrors.hasOwnProperty(item.tag) ? tagsErrors[item.tag as keyof typeof tagsErrors] : undefined}
                            error={tagsErrors.hasOwnProperty(item.tag)}
                            InputProps={{ inputProps: { min: 1 } }}
                        />
                    ) : null
                ))}
                <TypographyStyled variant='h6'>
                    INGREDIENTS
                    <Typography>Format: 'quantity,unit,description'</Typography>
                    <ButtonAdd fontSize='small' onClick={addIngredient}>{<AddCircleOutline />}</ButtonAdd>
                </TypographyStyled>
                {tagList.find(item => item.label === "Ingredients")!.value.map((ingredient: string, indexIngredient: number, taglist: string[]) => (
                    < TextFieldStyled
                        key={indexIngredient}
                        label={`Ingredient ${indexIngredient + 1}`}
                        onChange={(event) => onInputChange(indexIngredient, event, true)}
                        required
                        value={ingredient}
                        variant="outlined"
                        size="small"
                        error={tagsErrors.hasOwnProperty(`ingredient${indexIngredient + 1}`)}
                        helperText={tagsErrors.hasOwnProperty(`ingredient${indexIngredient + 1}`) ? tagsErrors[`ingredient${indexIngredient + 1}` as keyof typeof tagsErrors] : undefined}
                        InputProps={{
                            endAdornment: taglist.length > 3 ?
                                (< InputAdornment position="end" >
                                    <IconButton
                                        onClick={() => deleteIngredient(indexIngredient)}
                                        edge="end"
                                    >
                                        <RemoveCircleOutline />
                                    </IconButton>
                                </InputAdornment>)
                                : undefined
                        }}
                    />
                ))}
                <ButtonContainer>
                    <ButtonStyled
                        variant="contained"
                        startIcon={<CloudUpload />}
                        onClick={() => null}
                        disabled={Object.keys(tagsErrors).length === 0}
                    >
                        Add
                    </ButtonStyled>
                </ButtonContainer>
            </BoxStyled >
        </ModalStyled >
    )
}

export default FormModal