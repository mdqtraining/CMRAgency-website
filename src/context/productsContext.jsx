import { createContext } from "react";
import { useState , useEffect } from "react";


export const ProductsContext = createContext({
    products:[],
});


export const ProductsProvider = ({children}) =>{
 
    const [products , setProducts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://mdqualityapps.in/igreen_tec/fetchallproduct')
        const data = await response.json()
        setProducts(data.data)
      }
      
      useEffect(() => {
        fetchData()
      }, []);



    return(
        <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
    )

}

