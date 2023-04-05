import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import useSWR from 'swr';
import PageNotFound from "./PageNotFound";
import fetcher from '../shared/fetcher';
import Loader from "../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    var { data, error, isLoading } = useSWR(`https://ecom-strapi-server.onrender.com/api/products/${id}`, fetcher);

    if (error) return <PageNotFound />;

    if (isLoading) return <Loader />;

    const productData = { ...data.data.attributes, id: data.data.id }

    function handleClick() {
        addToCart(productData, 1);
        toast.success('Product added to the cart!')
    }

    return (
        <div className="bg-[#f3f2eb] min-h-screen flex justify-center items-center">
            <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-start md:justify-between">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <img src={productData.imageUrl} alt="PImage" className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
                        <p className="text-gray-700 mb-4">{productData.description}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-600 mr-2">Price:</span>
                            <span className="text-lg font-bold">${productData.price}</span>
                        </div>
                        <button className="border-[#A4907C] border-2 text-[#A4907C] hover:bg-[#A4907C] hover:text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    )
}

export default ProductDetails;