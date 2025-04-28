import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

function UserIcons() {
  return (
    <>
      <div className="text-2xl text-[#996e21]"><FaRegHeart /></div>
      <div className="text-2xl text-[#996e21]">
        <a href="/login" className="flex items-center gap-2">
          <FaUserCircle />
        </a>
      </div>
      <div className="text-2xl text-[#996e21]">
        <a href="/cart" className="flex items-center gap-2">
          <IoIosCart />
        </a></div>
    </>
  )
}

export default UserIcons;