import React from "react";
import "../App";
import { useAppContext } from "../context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesCheker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesCheker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  {" "}
                  Remove From favotires
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  {" "}
                  Add to favotires
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1> you ebie</h1>
      )}
    </div>
  );
};

export default Favorites;
