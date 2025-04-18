import { useState, useEffect } from "react";

function useTypingEffect(words, speed = 100, delay = 500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    if (!isRemoving && subIndex < words[index].length) {
      const timeout = setTimeout(() => setSubIndex(subIndex + 1), speed);
      return () => clearTimeout(timeout);
    } else if (isRemoving && subIndex > 0) {
      const timeout = setTimeout(() => setSubIndex(subIndex - 1), speed);
      return () => clearTimeout(timeout);
    } else if (subIndex === words[index].length && !isRemoving) {
      const timeout = setTimeout(() => setIsRemoving(true), delay);
      return () => clearTimeout(timeout);
    } else if (subIndex === 0 && isRemoving) {
      setIsRemoving(false);
      setIndex((index + 1) % words.length);
    }
  }, [subIndex, index, isRemoving]);

  return words[index].slice(0, subIndex);
}

export default useTypingEffect;