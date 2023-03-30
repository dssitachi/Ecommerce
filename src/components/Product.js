import { useNavigate } from "react-router-dom";
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'

function Product({product}) {

    const navigate = useNavigate();
    
    function routeToProductDetail(id) {
        navigate(`/product/${id}`);
    }

    return (
        <div href={product.href} className="group cursor-pointer" onClick={() => { routeToProductDetail(product.id) }}>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.imageUrl}
                    alt={"abc"}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 inline text-lg font-medium text-gray-900">Rs. {product.price}</p>
        </div>
    )
}

export default Product;