import React, { useEffect, useRef, useState } from "react";

function SearchableSelect({ options, value, setValue }) {
  const [items, setItems] = useState(options);
  const [show, setShow] = useState(false);
  const [text, setText] = useState(value);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const selectedItemRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => setText(value), [value]);

  useEffect(() => {
    if (!selectedItemRef.current) return;

    selectedItemRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  }, [selectedIndex]);

  function onFocus() {
    setText("");
    setShow(true);
  }

  function onBlur() {
    setText(value);
    closeDropDown();
  }

  function closeDropDown() {
    setShow(false);
    setItems(options);
    setSelectedIndex(-1);
    inputRef.current?.blur(); // when the user presses Esc, focusout will not work automatically
  }

  function handleOptionClick(e) {
    if (e.target.innerText !== value && e.target.innerText !== "") {
      setValue(e.target.innerText);
      closeDropDown();
    }
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
      const newIndex = selectedIndex - 1;
      setText(items[newIndex]);
      return setSelectedIndex(newIndex);
    }

    if (e.key === "ArrowDown" && selectedIndex !== items.length - 1) {
      const newIndex = selectedIndex + 1;
      setText(items[newIndex]);
      return setSelectedIndex(newIndex);
    }

    if (e.key === "Escape") {
      setText(value);
      return closeDropDown();
    }

    if (e.key === "Enter") {
      setValue(items[selectedIndex]);
      return closeDropDown();
    }
  }

  return (
    <div className="select-container" tabIndex={0} onKeyDown={handleKeyDown}>
      <input
        ref={inputRef}
        value={text}
        onChange={filterGenre}
        className="select-search"
        placeholder="Genre"
        onBlur={onBlur}
        onFocus={onFocus}
      />

      {show && (
        <div className="options-container">
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
