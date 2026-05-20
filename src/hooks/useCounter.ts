// src/hooks/useFavorite.ts
import { useState } from "react";

interface UseFavoriteReturn {
  isFavorite:   boolean;
  toggleFavorite: () => void;
}

function useFavorite(initialState: boolean = false): UseFavoriteReturn {
  const [isFavorite, setIsFavorite] = useState<boolean>(initialState);

  const toggleFavorite = () => setIsFavorite(prev => !prev);

  return { isFavorite, toggleFavorite };
}

export default useFavorite;
