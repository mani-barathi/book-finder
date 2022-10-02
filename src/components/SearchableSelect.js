import React, { useEffect, useRef, useState } from "react";

function SearchableSelect({ options, value, setValue }) {
  const [items, setItems] = useState(options);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItemRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!selectedItemRef.current) return;

    selectedItemRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  }, [selectedIndex]);

  function closeDropDown() {
    setText("");
    setItems(options);
    setShow(false);
    setSelectedIndex(0);
  }

  function handleOptionClick(e) {
    if (e.target.innerText !== value && e.target.innerText !== "") {
      setValue(e.target.innerText);
      setText("");
    }
    setShow(null);
  }

  function filterGenre(e) {
    let keyword = e.target.value;
    setText(keyword);
    keyword = keyword.toLowerCase();

    if (!keyword) {
      return setItems(options);
    }

    let filteredOptions = options.filter((item) =>
      item.toLowerCase().includes(keyword)
    );
    setItems(filteredOptions);
    setSelectedIndex(filteredOptions.length >= 0 ? 0 : -1);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowUp" && selectedIndex !== 0) {
      const newIndex = (prev) => (prev - 1) % items.length;
      return setSelectedIndex(newIndex);
    }

    if (e.key === "ArrowDown" && selectedIndex !== items.length - 1) {
      const newIndex = (prev) => (prev + 1) % items.length;
      return setSelectedIndex(newIndex);
    }

    if (e.key === "Escape") {
      return closeDropDown();
    }

    if (e.key === "Enter") {
      setValue(items[selectedIndex]);
      return closeDropDown();
    }
  }

  function onBlur(e) {
    if (e.relatedTarget !== btnRef.current) closeDropDown();
  }

  return (
    <div className="select-container">
      <button
        className="select-btn"
        onClick={() => setShow((p) => !p)}
        ref={btnRef}
      >
        <div>{value}</div>
        {show ? <span>&uArr;</span> : <span>&dArr;</span>}
      </button>

      {show && (
        <div
          className="options-container"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <input
            value={text}
            onChange={filterGenre}
            className="select-search"
            placeholder="Genre"
            autoFocus
            onBlur={onBlur}
          />

          <div className="options-list">
            {items.map((item, idx) => (
              <option
                key={item}
                value={item}
                className={`options-list-item${
                  selectedIndex === idx ? " selected" : ""
                }`}
                onMouseDown={handleOptionClick}
                ref={selectedIndex === idx ? selectedItemRef : null}
              >
                {item}
              </option>
            ))}
            {items.length === 0 && (
              <option className="options-list-item"> No result found</option>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchableSelect;
