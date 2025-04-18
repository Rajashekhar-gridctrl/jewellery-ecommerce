import { HiSearch } from "react-icons/hi";
import useTypingEffect from "../hooks/useTypingEffect";

function Search() {
  const suggestion = useTypingEffect(["Bangles", "Necklaces", "Rings", "Bracelets", "Earrings"]);

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder={`Search for ${suggestion}`}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#996e21]"
      />
      <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}

export default Search;