import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../api";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const Booklist = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();
  const favoritesCheker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="booklist">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="#"
              onClick={() => navigate(`/book/${book.id}`)}
            />
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
      ))}
      booklist
    </div>
  );
};

export default Booklist;
