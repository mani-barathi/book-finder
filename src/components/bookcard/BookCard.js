import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.slug}`} className="book-card">
      <div className="book-card-image">
        <img
          src={book.thumbnailImg}
          className="book-card-img"
          alt={book.title}
        />
      </div>
      <h3 className="book-card-title">{book.title}</h3>
      <p className="book-card-author">{book.author}</p>
      <small className="book-card-genre">{book.genre}</small>
    </Link>
  );
}

export default BookCard;
