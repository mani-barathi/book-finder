import React, { useState } from "react";
import BookCard from "../../components/bookcard/BookCard";
import "./HomePage.css";
import { books as originalBooks, genreOptions } from "../../utils/books";
import { ALL_GENRE, EMPTY_STRING } from "../../utils/constant";

function HomePage() {
  const [genre, setGenre] = useState(ALL_GENRE);
  const [search, setSearch] = useState(EMPTY_STRING);

  function filterBooks(search, genre) {
    let filteredBooks = originalBooks;

    if (genre === ALL_GENRE && search === EMPTY_STRING) {
      return filteredBooks;
    }

    if (genre !== ALL_GENRE) {
      filteredBooks = originalBooks.filter((book) => book.genre === genre);
    }

    if (search !== EMPTY_STRING) {
      const keyword = search.toLowerCase();
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(keyword)
      );
    }

    return filteredBooks;
  }

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
            <select
              className="select-genre"
              onChange={(e) => setGenre(e.target.value)}
            >
              {genreOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="book-list">
          {filterBooks(search, genre).map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
