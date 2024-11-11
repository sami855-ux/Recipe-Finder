import { useEffect, useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import Spinner from "../Ui/Spinner"
import Item from "../Ui/Item"
import { useItemContext } from "../context/ItemContext"

const API_KEY = "d797a2c6b15040d99078cf3cf3f3ec40"
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch"

const Home = () => {
  const { recipeItems, handleAddRecipe } = useItemContext()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchRecipe() {
      setIsLoading(true)
      try {
        const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&number=50`)
        const data = await res.json()

        handleAddRecipe(data.results)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipe()
  }, [])

  return (
    <div className="ml-[300px] min-h-screen flex items-center pt-7 flex-col">
      <section className="w-[700px] h-10 bg-gray-200 flex items-center space-x-2 px-3 rounded-md">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search for Recipe..."
          className="w-full h-full bg-transparent outline-none text-sm"
        />
      </section>
      <section className="w-full pl-10">
        <h1 className="text-2xl font-bold pt-5 pb-2 text-gray-800">
          Recommended Recipes
        </h1>
        <span className="text-gray-700 text-xs">Popular Search</span>

        <div className="w-full flex items-center gap-3 flex-wrap">
          {isLoading ? (
            <Spinner />
          ) : (
            recipeItems.map((item) => <Item key={item.id} item={item} />)
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
