import { useContext, useEffect, useState } from "react"
import { PiShoppingBagOpenFill } from "react-icons/pi"
import { Link } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import api from "../Api"


const Header = () => {
 const {selectedCategory, setSelectedCategory}= useContext(ProductContext)
 const [categories, setCategories] =useState([])
 

 //api kategori isteği
 useEffect(() => {
  
  api.get("/products/categories")
  .then((res) => 
           
    setCategories(["all", ...res.data]))     
  
}, []);


  return (
    <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-around  py-3 ">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 d-flex align-items-center gap-3 text-warning" to="/"> <PiShoppingBagOpenFill />Context Store</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex  mb-2 mt-2 mb-lg-0  ms-auto me-5">
            <li className="nav-item">
              <Link className="nav-link  fs-5" aria-current="page" to="/">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/Sepet">Sepet</Link>
            </li>

            <li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle fs-5"
    to="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    
  >
    
    Kategoriler
  </Link>

  <ul className="dropdown-menu">
    {categories.map((category, index) =>(
      <li
      key ={index}>
         <button className="dropdown-item" 
         onClick = {() =>{ setSelectedCategory(category)>
          console.log("seçilen kategori",category );
          
          


         }}
         
         >{category}</button> </li>
       ))}
      
  </ul>
  
   </li>
   </ul>

           
       
         </div>
      
        </div>
    </nav>
 
  )
}

export default Header
