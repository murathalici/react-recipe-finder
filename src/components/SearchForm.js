import React, { useState } from "react";
import { FaSearch, FaRandom } from "react-icons/fa";
import styles from "../styles/SearchForm.module.css";

const SearchForm = ({ onSearch, onRandom }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <FaSearch size={20} />
      </button>
      <button
        type="button"
        onClick={onRandom}
        className={`${styles.button} ${styles.randomButton}`}
      >
        <FaRandom size={20} />
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
