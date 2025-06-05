import {  createContext, useState } from "react"
import { toast } from "react-toastify"

export const  BasketContext= createContext()
const BasketProvider = ({children}) => {
    const [basket,setBasket]=useState([])
   
    //ürünü sepete ekler/miktarını arttırır
    const addToBasket = (product) => {
      
   // sepette ürün varlığını kontrol et
      const found= basket.find((i) =>i.id === product.id)
      if (!found){
        setBasket(basket.concat({...product,amount:1}))
        toast.success("Ürün sepete eklendi")
      }else {
      //  sepetteki ürünün miktarını  bir arttır
       const updated = {...found,amount: found.amount +1}
       //diziyi güncelle
       const newBasket =basket.map((i) => (updated.id === i.id ? updated  : i))
// diziyi güncelle
       setBasket(newBasket)
       toast.info(`Ürünün miktarı güncellendi (${updated.amount}) `)
      }
      }
       // id si bilinen eleman stateden kaldırıldı
       const removeFromBasket =(delete_id) =>{
        const filtred= basket.filter((item) => item.id !== delete_id)

        setBasket(filtred)
        toast.error("Ürün Sepetten Silindi")
       }

       //ürünün miktarını azalt

       const decreaseAmount = (delete_id) => {
        const found = basket.find((item)=> item.id === delete_id)

        // miktar birden büyükse miktarı azalt
        if (found.amount>1){
          //bir azalt
          const updated ={...found, amount: found.amount - 1}

          // diziyi güncelle
          const newBasket = basket.map((item) => item.id=== updated.id ? updated :item)
          // state i güncelle
          setBasket(newBasket), toast.info(`Ürün miktarı azaltıldı ${updated.amount}`)}
          
          else {
           // miktar bire eşitse ürünü sil 
           removeFromBasket(delete_id)
          }
        }

       
      return (
        <BasketContext.Provider value={{basket,
        addToBasket,
        decreaseAmount,
        removeFromBasket,}}>{children}
        </BasketContext.Provider>)
        
    
        }

   
  


export default BasketProvider
