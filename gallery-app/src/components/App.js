import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';




const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <MainNav />
      <PhotoContainer />
    </div>
  );
};



export default App;