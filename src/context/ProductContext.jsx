import  { createContext, useEffect, useState } from 'react'
import api from './../Api/index';

//* create context çağrıldı,değişkene aktarıldı

export const ProductContext =createContext()
//* Context yapısında tutulacak verileri bileşenlere aktarılacak yapıyı tanımla
export const ProductProvider = ({children}) => {

const[products, setProducts] = useState([])
const [selectedCategory, setSelectedCategory] = useState("all")

// api istek at
useEffect(() => {
    const url =
    selectedCategory === "all" ? "/products" : `/products/category/${selectedCategory}`
    api.get(url).then((res) => {
        setProducts(res.data);
       
        
    }).catch((err) =>{
        console.error("API Hatası",err)
    })

}, [selectedCategory])

    return(
    <ProductContext.Provider value={{products, setProducts , selectedCategory, setSelectedCategory}}>{children}</ProductContext.Provider>
    )
}

