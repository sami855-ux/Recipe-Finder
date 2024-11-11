import { Link } from "react-router-dom"
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi2"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-72 h-screen bg-white py-7 px-4">
      <h1 className="text-3xl" id="header">
        Cook Recipe
      </h1>
      <ul className="w-full h-16 flex  flex-col pt-16 pl-7 space-y-3">
        <li className="flex items-center space-x-2">
          <HiOutlineHome size={20} />
          <Link to={"/"} className="text-sm font-semibold text-gray-700">
            Home
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <HiOutlineHeart size={20} />
          <Link
            to={"/favourite"}
            className="text-sm font-semibold text-gray-700"
          >
            Favourite
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
