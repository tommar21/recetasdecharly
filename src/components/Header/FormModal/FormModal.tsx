import React from 'react'
import { FormModalProps } from '../../../interfaces/interfaces';
import useForm from './useForm';
//Material components
import { Typography, InputAdornment, IconButton } from '@mui/material';
import { CloudUpload, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { BoxStyled, ModalStyled, TextFieldStyled, ButtonStyled, ButtonContainer, ButtonAdd, TypographyStyled } from './style';

const FormModal: React.FC<FormModalProps> = ({ openModal, setOpenModal }) => {

    const { addIngredient, addRecipe, deleteIngredient, onInputChange, tagList, setTagList, tagListDefault, tagsErrors } = useForm(setOpenModal)

    return (
        <ModalStyled open={openModal} onClose={() => {
            setOpenModal(false)
            setTagList(tagListDefault)
        }}>
            <BoxStyled component="form" autoComplete="off">
                <Typography variant='h6'>RECIPE DATA</Typography>
                {tagList.map((item, index) => (
                    item.label !== "Ingredients" ? (
                        < TextFieldStyled
                            type={item.type}
                            label={item.label}
                            onChange={(event) => onInputChange(index, event)}
                            value={item.value}
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
                        onClick={() => addRecipe()}
                        disabled={!(Object.keys(tagsErrors).length === 0)}
                    >
                        Add
                    </ButtonStyled>
                </ButtonContainer>
            </BoxStyled >
        </ModalStyled >
    )
}

export default FormModal