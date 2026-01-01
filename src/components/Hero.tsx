import { Link } from "react-router-dom"

function Hero(){
    return (
        <>
            <div className="max-w-7xl mx-auto text-sm flex items-center justify-center w-6/6 bg-gray-00">
                <div className="h-100 flex items-end px-3 md:px-1">
                   <div className="space-y-10">
                     <div className="text-4xl md:text-5xl max-w-4xl text-center">
                        Start chatting with friends, anytime, anywhere with Achat
                    </div>
                    <p className="text-gray-600 max-w-lg mx-auto text-center">Great software that allows you to chat from any place at any time without any interruption.</p>
                    <Link to={'/register'}>
                        <button className=" mb-10 bg-blue-900 cursor-pointer mx-auto h-10 w-40 text-white flex items-center justify-center rounded-md ">
                        Start Chatting Now
                    </button>
                    </Link>
                   </div>
                </div>
                {/* <div className="w-full">
                    <div className="flex">
                        <img src="images/black-american.png" alt=""  className="mt-8 w-140"/>
                    </div>

                </div> */}
            </div>
        </>
    )
}
export default Hero