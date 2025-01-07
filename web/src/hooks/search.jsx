import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

import api from "../services/api.js";

function SearchProvider({ children }) {
  const [results, setResults] = useState([]);

  async function handleSearch(term) {
    if (term.length > 2) {
      const response = await api.get(
        `${api.defaults.baseURL}/food/search/${term}`
      );

      setResults(response.data);
    } else {
      setResults([]);
    }
  }

  return (
    <SearchContext.Provider value={{ results, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearch };
