import { Link } from "react-router-dom"
import Logo from "./Logo"

function Navbar() {
    return (
        <>
            <nav className=" text-sm ">
                <div className="max-w-7xl mx-auto  flex justify-between items-center h-18 px-3">
                    <Logo />
                    
                    <div className="flex items-center space-x-4">
                        <Link to={'/login'}>
                            <button className="bg-blue-900 h-10 w-40 text-white flex items-center justify-center rounded-md">Get Started</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar