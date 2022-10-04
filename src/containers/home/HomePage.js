import React, { useEffect, useState } from "react";
import BookCard from "../../components/bookcard/BookCard";
import "./HomePage.css";
import {
  books as originalBooks,
  filterBooks,
  genreOptions,
} from "../../utils/books";
import { ALL_GENRE, EMPTY_STRING } from "../../utils/constant";
import SearchableSelect from "../../components/SearchableSelect";

function HomePage() {
  const [books, setBooks] = useState(originalBooks);
  const [genre, setGenre] = useState(ALL_GENRE);
  const [search, setSearch] = useState(EMPTY_STRING);

  useEffect(() => {
    setBooks(filterBooks(originalBooks, search, genre));
  }, [genre, search]);

  return (
    <div>
      <div className="banner">
        <div className="hero">
          <h1 className="hero-text">Book Finder</h1>
          <div className="search-container">
            <input
              placeholder="Search..."
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchableSelect
              options={genreOptions}
              value={genre}
              setValue={setGenre}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
        {books.length === 0 && (
          <p style={{ textAlign: "center" }}>No Book found!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
