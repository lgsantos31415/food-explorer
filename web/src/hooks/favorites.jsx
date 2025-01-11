import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api.js";

export const FavoritesContext = createContext({});

function FavoritesProvider({ children }) {
  const [liked, setLiked] = useState([]);

  async function fetchLiked() {
    try {
      const response = await api.get("/favorites");
      if (response.data) {
        setLiked(response.data);
      } else {
        setLiked([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLiked();
  }, []);

  useEffect(() => console.log(liked), [liked]);

  async function updateLiked(food_id) {
    let likedIncludesFoodId = false;

    for (const favorite of liked) {
      if (favorite.food_id === food_id) {
        likedIncludesFoodId = true;
        break;
      }
    }

    if (likedIncludesFoodId) {
      try {
        await api.delete(`/favorites/${food_id}`);
        fetchLiked();
      } catch (error) {
        console.log(error);
      }
    } else if (!likedIncludesFoodId) {
      try {
        await api.post(`/favorites/${food_id}`);
        fetchLiked();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        liked,
        updateLiked,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);
  return context;
}

export { FavoritesProvider, useFavorites };
