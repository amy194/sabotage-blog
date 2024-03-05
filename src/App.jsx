import {Routes, Route } from "react-router-dom"
import {NavLink} from 'react-router-dom'
import Author from "./pages/Author"
import ArticlePage from "./pages/Article"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Article from "./pages/Article"
import NotFound from "./pages/NotFound"
import LatestArticles from "./components/LatestArticles"
import Footer from "./components/Footer"
import MenuCustom from './components/MenuCustom'

import 'tailwindcss/tailwind.css'
import './App.css'
// Faire votre système de pages, routes, route ici
// Toutes les routes à créer correspondent au dossier pages donc 4 routes à faire
const App = () =>  {

  return (
    <>
    
   <MenuCustom />
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/articles" element={<Articles/>} />
      <Route path="/auteurs" element={<Author/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/article/:id" element={<Article/>} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </>
  )
} 

export default App;
