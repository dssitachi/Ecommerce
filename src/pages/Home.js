import { useContext } from "react";
import ProductContainer from "../components/ProductContainer";
import { ProductContext } from "../contexts/ProductContext";

function Home() {

    const products = useContext(ProductContext)
    return (
        <>
            <ProductContainer />
        </>
    )
}

export default Home;
