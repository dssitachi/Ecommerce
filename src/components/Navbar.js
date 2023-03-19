import { useContext } from "react";
import { SideBarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

function Navbar() {

    const { setIsOpen } = useContext(SideBarContext)

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                alt="Workflow"
                            />
                        </Link>
                    </div>
                    
                    <div className="flex items-center">
                        <div className="relative cursor-pointer" onClick={() => {setIsOpen(true)}}>
                            <ShoppingBagIcon className="h-6 w-6 text-gray-400" />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;