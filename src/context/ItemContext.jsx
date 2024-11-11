import { useContext, createContext, useState, useEffect } from "react"

const API_KEY = "d797a2c6b15040d99078cf3cf3f3ec40"
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"

const ItemContext = createContext()

const ItemContextProvider = ({ children }) => {
  const [recipeItems, setRecipeItems] = useState([])
  const [favRecipe, setFavRecipe] = useState([])
  const [searchedItems, setSearchItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")

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

  function handleSetQuery(query) {
    setQuery(query)
  }

  function handleSearchedItems(items) {
    setSearchItems(items)
  }

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true)
      try {
        const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&number=50`)
        const data = await res.json()
        console.log(data.results)
        handleAddRecipe(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipe()
  }, [])

  useEffect(() => {
    if (!query) return

    async function fetchRecipe() {
      setIsLoading(true)
      try {
        const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&query=${query}`)
        const data = await res.json()

        handleSearchedItems(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipe()
  }, [query])

  const value = {
    recipeItems,
    favRecipe,
    query,
    searchedItems,
    isLoading,
    handleAddRecipe,
    handleAddFavRecipe,
    handleSetQuery,
    handleSearchedItems,
  }
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}

const useItemContext = () => {
  const itemContext = useContext(ItemContext)

  return itemContext
}

export { ItemContextProvider, useItemContext }
