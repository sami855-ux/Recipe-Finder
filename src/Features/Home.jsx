import { HiOutlineSearch } from "react-icons/hi"

import { useItemContext } from "../context/ItemContext"
import Spinner from "../Ui/Spinner"
import Item from "../Ui/Item"

const Home = () => {
  const { recipeItems, handleSetQuery, query, searchedItems, isLoading } =
    useItemContext()

  const filtered = query.length === 0 ? recipeItems : searchedItems

  return (
    <div className="ml-[300px] min-h-screen flex items-center pt-7 flex-col">
      <section className="w-[700px] h-10 bg-gray-200 flex items-center space-x-2 px-3 rounded-md">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search for Recipe..."
          className="w-full h-full bg-transparent outline-none text-sm"
          value={query}
          onChange={(e) => handleSetQuery(e.target.value)}
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
          ) : filtered?.length > 0 ? (
            filtered?.map((item) => <Item key={item.id} item={item} />)
          ) : (
            <p>Recipe not found</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
