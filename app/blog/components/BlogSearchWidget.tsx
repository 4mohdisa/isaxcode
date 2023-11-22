import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;  // Callback function when a search is submitted
  placeholder?: string;               // Optional placeholder text
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search Here' }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      <div className="flex items-center">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-l-md p-2.5 text-white placeholder-gray-400 outline-none focus:border-white/50"
          placeholder={placeholder}
        />
        <button type="submit" className="w-30 bg-white rounded-r-md p-2.5 text-black transition duration-500">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
