import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Recipes from '../components/Recipes/Recipes';
import SearchBar from '../components/SearchBar/SearchBar';

import { BASE_URL, APP_ID, APP_KEY }  from '../utils';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("chicken")

  const getRecipes = async () => {
    const response = await fetch(`${BASE_URL}search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(response);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const searchHandler = (e) => {
    setQuery(e.target.value)
    if (e.key === 'Enter') {
        setSearch(query);
    }        
  }

  useEffect(() => {
    getRecipes()
  }, [search]);

  return (
    <Layout>
        <SearchBar query={query} searchHandler={searchHandler} />
        <Recipes recipes={recipes} />
    </Layout>
  );
}

export default App;
