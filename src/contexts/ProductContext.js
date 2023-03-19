import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
 
    useEffect(function() {
        async function getData() {
            var response = await fetch("http://localhost:1337/api/products")
            var data = await response.json();
            var flattenProduct = data.data.map(function flatten(product) {
                return {
                    id: product.id,
                    ...product.attributes
                }
            })
            console.log(flattenProduct)
            setProducts(flattenProduct);
        }
        getData();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductProvider;