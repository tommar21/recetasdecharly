import React, { useState, useEffect } from 'react'
import { postRecipe } from '../../../services/services';
import { AxiosResponse } from 'axios';
import { useRecetasContext } from '../../../context/RecetasProvider';

const useForm = (setOpenModal: any) => {
    const tagListDefault: { tag: string, label?: string, type?: string, value: any }[] = [
        {
            tag: "title",
            label: "Title",
            type: "text",
            value: ""
        },
        {
            tag: "source_url",
            label: "URL",
            type: "url",
            value: ""
        },
        {
            tag: "image_url",
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
            tag: "cooking_time",
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
    const { setAlertState } = useRecetasContext()
    const [tagList, setTagList] = useState(tagListDefault)
    const [tagsErrors, setTagsErrors] = useState({})

    const validateTagValue = (tag: string, value: string) => {
        let error: string | null = "Required";
        if (value === "") return error
        else if (["cooking_time", "servings"].indexOf(tag) !== -1 && Number(value) < 1) error = "No puede tener un valor menor a 1";
        else if (tag === "ingredient" && !(/^[0-9]?\d*(\.\d+)?,[A-Za-z]*?,[A-Za-z]+$/g).test(value)) error = "Formato incorrecto"
        else error = null;
        return error
    }

    const onInputChange = (indexTag: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isAnIngredient?: true) => {
        const tagListToBeSetted = [...tagList];
        tagListToBeSetted.forEach((tag, index) => {
            if (isAnIngredient && tag.label === "Ingredients" && Array.isArray(tag.value)) tag.value[indexTag] = event.currentTarget.value
            else if (!isAnIngredient && index === indexTag) tag.value = event.currentTarget.value
        })
        setTagList(tagListToBeSetted)
    }

    const addIngredient = () => {
        const tagListToBeSetted = tagList.filter((tag) => tag.label !== "Ingredients");
        const ingredients = tagList.find(tag => tag.label === "Ingredients")!
        ingredients.value.push("")
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
    }

    const deleteIngredient = (indexIngredient: number) => {
        const tagListToBeSetted = tagList.filter((tag) => tag.label !== "Ingredients");
        const ingredients = tagList.find(tag => tag.label === "Ingredients")!
        ingredients.value.splice(indexIngredient, 1)
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
    }

    const addRecipe = () => {
        const tagListClone = [...tagList];
        const data= {};
        const ingredientsValue = tagListClone.find(item => item.tag === "ingredients")!.value.map((item: any) => {
            const values = item.split(",");
            return ({
                quantity: Number(values[0]) || null,
                unit: values[1],
                description: values[2]
            })
        })
        tagListClone.forEach(item => {
            delete item.label;
            delete item.type;
            if (['servings', 'cooking_time'].indexOf(item.tag) !== -1) item.value = Number(item.value);
            Object.defineProperty(data, item.tag, { value: item.tag === "ingredients" ? ingredientsValue : item.value, enumerable: true })
        })

        postRecipe(data)
            .then((response: AxiosResponse) => {
                const data = response.data;
                if (data.status === "success") {
                    setAlertState({
                        active: true,
                        message: "Tu receta se ha añadido correctamente",
                        severity: "success"
                    })
                }
                else {
                    setAlertState({
                        active: true,
                        message: "No se ha podido añadir tu receta",
                        severity: "error"
                    })
                }

            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setOpenModal(false)
            })
    }

    //set errors
    useEffect(() => {
        const tagsErrorsToBeSetted = { ...tagsErrors };
        tagList.forEach(item => {
            if (item.tag !== "ingredients") {
                const error = validateTagValue(item.tag, item.value);
                error ?
                    Object.defineProperty(tagsErrorsToBeSetted, item.tag, { value: error, writable: true, enumerable: true }) :
                    delete tagsErrorsToBeSetted[item.tag as keyof typeof tagsErrorsToBeSetted]
            }
            else {
                item.value.forEach((item: string, index: number) => {
                    const error = validateTagValue("ingredient", item);
                    error ?
                        Object.defineProperty(tagsErrorsToBeSetted, `ingredient${index + 1}`, { value: error, writable: true, enumerable: true }) :
                        delete tagsErrorsToBeSetted[`ingredient${index + 1}` as keyof typeof tagsErrorsToBeSetted];
                });
            }
        })
        setTagsErrors(tagsErrorsToBeSetted)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tagList])

    return ({
        tagList,
        tagListDefault,
        setTagList,
        tagsErrors,
        addRecipe,
        addIngredient,
        deleteIngredient,
        onInputChange
    })
}

export default useForm