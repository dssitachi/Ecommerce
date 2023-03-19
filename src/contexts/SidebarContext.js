import { createContext, useState } from "react";

export const SideBarContext = createContext();

function SideBarProvider({children}) {
    
    const [isOpen, setIsOpen] = useState(false)

    function closeSidebar() {
        setIsOpen(false);
    }

    return (
        <SideBarContext.Provider value={ {isOpen, setIsOpen, closeSidebar} }>
            { children }
        </SideBarContext.Provider>
    )
}

export default SideBarProvider;