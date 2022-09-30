import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookByslug } from "../../utils/books";
import "./SingleBookPage.css";

function SingleBookPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState();

  useEffect(() => {
    setBook(getBookByslug(slug));
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container">
        <h1>Book not Found!</h1>
        <p>The book that you're trying to access is not available.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="home-link">
        Go to Home
      </Link>
      <h1 className="book-title">{book.title}</h1>
      <p className="book-author">
        by <strong>{book.author}</strong>
      </p>
      <div className="book-cover-image">
        <img src={book.coverImg} alt={book.title} className="book-cover-img" />
      </div>
      <p className="book-description">{book.description}</p>
    </div>
  );
}

export default SingleBookPage;
