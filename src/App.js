import Header from "./components/Header.js" 
import Footer from "./components/Footer.js"
import MoviesGrid from"./components/moviesgrid.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MoviesGrid></MoviesGrid>
      <Footer></Footer>
    </div>
  );
}

export default App;
