import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Pnf from './Pages/Pnf'
import Recipes from './Pages/Recipes'
import RecipesDetails from './Pages/RecipesDetails'
import Recipeform from './Pages/Recipeform'
import { ToastContainer } from "react-toastify";

function App() {


  return (
    <>
 <Header/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipe' element={<Recipes/>}/>
    <Route path='/information/:id' element={<RecipesDetails/>}/>
    <Route path='/recipecard' element={<Recipeform/>}/>
    {/* Invaild path redirect to pnf */}
    <Route path='*' element={<Pnf/>}/>

 </Routes>
 <Footer/>
 <ToastContainer  position="top-right"   autoClose={3000} />
    </>
  )
}

export default App
