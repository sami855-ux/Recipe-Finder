import { useContext, createContext, useState } from "react"

const ItemContext = createContext()

const ItemContextProvider = ({ children }) => {
  const [recipeItems, setRecipeItems] = useState([])
  const [favRecipe, setFavRecipe] = useState([])

  function handleAddRecipe(item) {
    setRecipeItems(item)
  }

  function handleAddFavRecipe(id) {
    const isThere = favRecipe.filter((item) => item.id == id).length > 0

    if (isThere) {
      setFavRecipe((curr) => curr.filter((item) => item.id != id))
    } else {
      const newFav = recipeItems.filter((item) => item.id === id)
      setFavRecipe((curr) => [...curr, ...newFav])
    }
  }

  const value = { recipeItems, handleAddRecipe, favRecipe, handleAddFavRecipe }
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}

const useItemContext = () => {
  const itemContext = useContext(ItemContext)

  return itemContext
}

export { ItemContextProvider, useItemContext }
