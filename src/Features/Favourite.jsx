import { useItemContext } from "../context/ItemContext"

import FavItem from "./FavItem"

const Favourite = () => {
  const { favRecipe } = useItemContext()
  return (
    <div className="ml-[300px] min-h-screen flex items-center pt-7 flex-col">
      <section className="w-full pl-10">
        <h1 className="text-2xl font-bold pt-5 pb-2 text-gray-800">
          Favourite Recipes
        </h1>
        <div className="w-full flex items-center gap-3 flex-wrap">
          {favRecipe.length === 0 ? (
            <p className="text-sm font-semibold text-red-600">
              There no is Items Here, click the heart button to add to favourite
            </p>
          ) : (
            favRecipe.map((item) => <FavItem key={item.id} item={item} />)
          )}
        </div>
      </section>
    </div>
  )
}

export default Favourite
