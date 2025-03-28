
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // In a real app, this would navigate to search results
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="bg-white dark:bg-secondary shadow-soft rounded-full flex items-center overflow-hidden border border-border focus-within:border-primary transition-colors p-1"
      >
        <Search className="h-5 w-5 ml-3 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for groceries, fruits, vegetables..."
          className="flex-1 py-3 px-4 bg-transparent focus:outline-none text-foreground"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
