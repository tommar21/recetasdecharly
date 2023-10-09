import { RecipeItemProps } from "../interfaces/interfaces"

export const setBookmarks = (bookmarkToSet: RecipeItemProps) => {
    let existingBookmarks: RecipeItemProps[] | null = JSON.parse(localStorage.getItem('bookmarks')!)

    localStorage.setItem("bookmarks", JSON.stringify(
        existingBookmarks ? (
            existingBookmarks.filter((existingBookmark) => existingBookmark.id === bookmarkToSet.id).length === 0 ?
                existingBookmarks.concat([bookmarkToSet]) :
                existingBookmarks.filter((existingBookmark) => existingBookmark.id !== bookmarkToSet.id)
        ) : [bookmarkToSet]
    ))
}