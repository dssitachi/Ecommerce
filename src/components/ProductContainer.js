import Product from "./Product";
import useSWR from 'swr';
import Loader from "./Loader";
import PageNotFound from "../pages/PageNotFound";
import fetcher from '../shared/fetcher';

function ProductContainer() {

    const { data, error, isLoading } = useSWR(`http://localhost:1337/api/products`, fetcher);

    if (error) return <PageNotFound />;
    if (isLoading) return <Loader />;

    var products = data.data.map(function flatten(product) {
        return {
            id: product.id,
            ...product.attributes
        }
    })
    // const products = useContext(ProductContext)
    return (
        <div className="bg-[#f3f2eb]">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductContainer;