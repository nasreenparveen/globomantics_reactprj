import { useEffect,useState,useMemo } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  const[allhouses,setAllHouses]=useState([]);
  useEffect(()=>{
    const featchHouses=async()=>{
      const response=await fetch("/houses.json");
      const houses=await response.json();
      setAllHouses(houses);
    };
    featchHouses();
  },[]);

const featuredHouse=useMemo(()=>{
if(allhouses.length)
{
  const randomIndex=Math.floor(Math.random()*allhouses.length);
  return allhouses[randomIndex];
}
},[allhouses]);

  return (
    <Router>
      <div className='container'>      
      <Header 
       subtitle='Sell Property throughout the World' 
     title='Home for All'/>
    <HouseFilter allhouses={allhouses}/>
    <Routes>
      <Route path='/searchresults/:country' element={
        <SearchResults allhouses={allhouses}></SearchResults>
      }>
      </Route>
      <Route path='/house/:id' element={
        <HouseFromQuery allhouses={allhouses}></HouseFromQuery>
      }>
      </Route>
      <Route path='/' element={
        <FeaturedHouse house={featuredHouse}></FeaturedHouse>
      }>
      </Route>
    </Routes>
    </div>
    </Router>
    
  // <div className='container'>      
  //     <Header 
  //     subtitle='Sell Property throughout the World' 
  //     title='Home for All'/>
  // </div>
  );
}

export default App;
