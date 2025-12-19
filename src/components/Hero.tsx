function Hero(){
    return (
        <>
            <div className="max-w-7xl mx-auto text-sm flex">
                <div className="h-100 flex items-end w-full">
                   <div className="space-y-10">
                     <div className="text-5xl max-w-lg">
                        Start chatting with friends, anytime, anywhere with Achat
                    </div>
                    <p className="text-gray-600 max-w-lg">Great software that allows you to chat from any place at any time without any interruption.</p>
                    <button className="bg-blue-700 h-10 w-40 text-white flex items-center justify-center rounded-md ">
                        Start Chatting Now
                    </button>
                   </div>
                </div>
                <div className="w-full">
                    <div className="flex">
                        <img src="images/black-american.png" alt=""  className="mt-8 w-140"/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Hero