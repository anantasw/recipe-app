import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Recipes from '../components/Recipes/Recipes';
import SearchBar from '../components/SearchBar/SearchBar';

import { BASE_URL, APP_ID, APP_KEY }  from '../utils';

function App() {
  const URL = `${BASE_URL}search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  useEffect(() => {
    getRecipes()
  }, []);

  return (
    <Layout>
        <SearchBar />
        <Recipes recipes={recipes} />
    </Layout>
  );
}

export default App;
