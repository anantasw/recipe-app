import Layout from '../components/Layout/Layout';
import Recipes from '../components/Recipes/Recipes';
import SearchBar from '../components/SearchBar/SearchBar';

function App() {
  return (
    <Layout>
        <SearchBar />
        <Recipes />
    </Layout>
  );
}

export default App;
