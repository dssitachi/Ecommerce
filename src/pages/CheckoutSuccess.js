import { Link } from "react-router-dom";

function CheckoutSuccess() {

    return (
        <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* <p className="text-base font-semibold text-[#A4907C]">404</p> */}
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thank you!!</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Your Order has been placed successfully</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/">
                        <p className="rounded-md bg-[#8D7B68] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A4907C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Continue Shopping
                        </p>
                    </Link>

                    <Link to='/'>
                        <span className="text-sm font-semibold text-gray-900">
                            Go Home <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default CheckoutSuccess;