import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import useSWR from 'swr';
import PageNotFound from "./PageNotFound";
import fetcher from '../shared/fetcher';
import Loader from "../components/Loader";

function ProductDetails() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    var { data, error, isLoading } = useSWR(`http://localhost:1337/api/products/${id}`, fetcher);

    if (error) return <PageNotFound />;

    if (isLoading) return <Loader />;

    const productData = { ...data.data.attributes, id: data.data.id }

    function handleClick() {
        addToCart(productData, 1);
    }

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-start md:justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <img src="https://via.placeholder.com/600x400" alt="PImage" className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
                        <p className="text-gray-700 mb-4">{productData.description}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-600 mr-2">Price:</span>
                            <span className="text-lg font-bold">${productData.price}</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;