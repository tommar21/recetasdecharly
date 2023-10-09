import React, { useState, useEffect } from 'react'
import { postRecipe } from '../../../services/services';
import { AxiosResponse } from 'axios';
import { useRecetasContext } from '../../../context/RecetasProvider';
import { setBookmarks } from '../../../utils/setBookmark';

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
        else if (["cooking_time", "servings", "ingredient"].indexOf(tag) === -1 && value.length < 5) error = "Value must be at least 5 characters long"
        else if (["cooking_time", "servings"].indexOf(tag) !== -1 && Number(value) < 1) error = "It cannot have a value less than 1";
        else if (tag === "ingredient" && !(/^[0-9]?\d*(\.\d+)?,[A-Za-z]*?,[A-Za-z\s]*$/g).test(value)) error = "Incorrect format"
        else error = null;
        return error
    }

    const onInputChange = (indexTag: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isAnIngredient?: true) => {
        const tagListToBeSetted = [...tagList];
        tagListToBeSetted.forEach((item, index) => {
            if (isAnIngredient && item.tag === "ingredients" && Array.isArray(item.value)) item.value[indexTag] = event.currentTarget.value
            else if (!isAnIngredient && index === indexTag) item.value = event.currentTarget.value
        })
        setTagList(tagListToBeSetted)
    }

    const addIngredient = () => {
        const tagListToBeSetted = tagList.filter((item) => item.tag !== "ingredients");
        const ingredients = tagList.find(item => item.tag === "ingredients")!
        ingredients.value.push("")
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
    }

    const deleteIngredient = (indexIngredient: number) => {
        const tagListToBeSetted = tagList.filter((item) => item.tag !== "ingredients");
        const ingredients = tagList.find(item => item.tag === "ingredients")!
        ingredients.value.splice(indexIngredient, 1)
        tagListToBeSetted.push(ingredients)
        setTagList(tagListToBeSetted)
        setTagsErrors({})
    }

    const addRecipe = () => {
        const tagListClone = [...tagList];
        const data = {};
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
                        message: "Your recipe has been added correctly to bookmarks",
                        severity: "success"
                    })
                    const recipe = {
                        id: data.data.recipe.id,
                        image_url: data.data.recipe.image_url,
                        publisher: data.data.recipe.publisher,
                        title: data.data.recipe.title,
                    }

                    setBookmarks(recipe)
                }
                else {
                    setAlertState({
                        active: true,
                        message: "Your recipe could not be added",
                        severity: "error"
                    })
                }

            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setOpenModal(false)
                setTagList(tagListDefault)
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