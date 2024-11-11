import { useState } from "react"
import { HiOutlineHeart } from "react-icons/hi2"

import { useItemContext } from "../context/ItemContext"

const FavItem = ({ item }) => {
  const { handleAddFavRecipe } = useItemContext()

  const [fav, setFav] = useState(true)
  const { id, title, image } = item

  return (
    <div className="w-60 h-64 bg-gray-200 relative">
      <p
        className="absolute top-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => {
          handleAddFavRecipe(id)
          setFav(!fav)
        }}
      >
        <HiOutlineHeart
          size={17}
          stroke="red"
          fill={fav ? "red" : "white"}
          color="red"
        />
      </p>
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />
      <p className="text-sm font-semibold pt-4 text-gray-800 pl-2">{title}</p>
      <span className="text-sm text-gray-700 pt-4 pl-2">Italian Kitchen</span>
    </div>
  )
}

export default FavItem
