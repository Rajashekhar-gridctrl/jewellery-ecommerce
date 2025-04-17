import { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi"; // Import the search icon

const suggestions = ["Bangles", "Necklaces", "Rings", "Bracelets", "Earrings"];

function Search() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false); // Track whether we are removing letters

  useEffect(() => {
    if (!isRemoving && subIndex < suggestions[index].length) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isRemoving && subIndex > 0) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (subIndex === suggestions[index].length && !isRemoving) {
      // Wait for 500ms before starting to delete
      const timeout = setTimeout(() => {
        setIsRemoving(true);
      }, 500); // Delay before starting deletion
      return () => clearTimeout(timeout);
    } else if (subIndex === 0 && isRemoving) {
      setIsRemoving(false);
      setIndex((prev) => (prev + 1) % suggestions.length); // Move to the next suggestion
    }
  }, [subIndex, index, isRemoving]);

  return (
    // <div className="md:max-w-md relative">
    <div className="w-full relative">
      <input
        type="text"
        placeholder={`Search for ${suggestions[index].slice(0, subIndex)}`}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#996e21]"
      />
      <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}

export default Search;