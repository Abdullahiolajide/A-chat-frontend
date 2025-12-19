function Navbar() {
    return (
        <>
            <nav className=" text-sm ">
                <div className="max-w-7xl mx-auto  flex justify-between items-center h-18">
                    <div className="text-blue-700 text-2xl font-medium">Achat</div>
                    <ul className="flex space-x-8 font-medium">
                        {["Demos", "About", "Blog", "Pages", "Contact"].map((name)=>(
                            <li className="hover:text-blue-800 hover:font-bold duration-300 cursor-pointer">{name}</li>  
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button>Login</button>
                        <button className="bg-blue-700 h-10 w-40 text-white flex items-center justify-center rounded-md">Get Started Free</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar