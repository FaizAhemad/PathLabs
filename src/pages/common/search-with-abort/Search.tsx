import React, {useEffect, useState} from "react";

// Type for the result item
type SearchResult = {
  id: number;
  name: string;
  email: string;
};

let debounceTimeout: ReturnType<typeof setTimeout>;

const SearchWithDebounceAndAbort = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [controller, setController] = useState<AbortController | null>(null);

  // Effect to clean up the previous request and set up debounce
  useEffect(() => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Delay the API call until the user stops typing for 500ms
    debounceTimeout = setTimeout(() => {
      if (query) {
        fetchData(query);
      }
    }, 500);

    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [query]);

  const fetchData = async (searchQuery: string) => {
    if (controller) {
      controller.abort(); // Cancel the previous request
    }

    const newController = new AbortController();
    setController(newController);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Filter users based on the search query
      const filteredData = data.filter((user: {name: string}) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredData);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.log("Request was canceled");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        aria-label="Search"
      />
      <ul>
        {results.length > 0 ? (
          results.map((result) => (
            <li key={result.id}>
              {result.name} - {result.email}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchWithDebounceAndAbort;
