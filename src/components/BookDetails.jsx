import React, { useState, useEffect } from "react";
import "../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAIL_URL } from "../api";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAIL_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="bookdetails">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-poster">
        <h2> description </h2>
        <p> {book?.description} </p>
        <h2> auteur </h2>
        <p> {book?.authors} </p>
        <h2> Genres </h2>
        <p> {book?.genres} </p>
      </div>
    </div>
  );
};

export default BookDetails;
