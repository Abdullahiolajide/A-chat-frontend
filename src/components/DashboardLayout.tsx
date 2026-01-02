import axios from "axios"
import backendurl from "../global"
import { useEffect } from "react"
import Logo from "./Logo"
import { MdChatBubble } from "react-icons/md"
import { LuNewspaper } from "react-icons/lu"
import { IoIosCreate } from "react-icons/io"
import { IoSearch } from "react-icons/io5"

const DashboardLayout = () => {
    useEffect(()=>{
         axios.get(`${backendurl}/auth/me`)
        .then((result)=>{
            console.log(result, "dgre")
        })
        .catch((err)=>{
            console.log(err);
            window.location.href = "http://localhost:5173/login"
            
        })
    }, [])
    
    const logout = ()=>{
        axios.get(`${backendurl}/auth/logout`)
        .then((result)=>{
            console.log(result, "dgre")
            window.location.href = "http://localhost:5173/login"
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="flex">
        <nav className="w-20 border border-gray-300 min-h-screen py-4">
            <div className="flex items-center justify-center">
                <div className="text-xl font-bold bg-[#137FEC] h-10 flex items-center justify-center w-10 text-white rounded">N</div>
            </div>

            <ul className="mt-15 space-y-4">
                <li className="px-2">
                    <div className="bg-[#E7F2FD] flex flex-col items-center justify-center py-2 rounded-md">
                        <div className="text-3xl text-[#137FEC]"><MdChatBubble /></div>
                        <div className="text-sm font-medium text-[#137FEC]">Chat</div>
                    </div>
                </li>

                <li className="px-2">
                    <div className="bg-[#E7F2F flex flex-col items-center justify-center py-2 rounded-md">
                        <div className="text-3xl "><LuNewspaper /></div>
                        <div className="text-sm font-medium text-#137FEC]">Notes</div>
                    </div>
                </li>
            </ul>

        </nav>

        <div className="w-full min-h-screen flex">

            <section className="w-90 ">
                <div className="py-5 border-b border-r border-gray-300 px-5 flex justify-between">
                    <div className="text-2xl font-bold flex items-center justify-center space-x-2">
                        <div>Chats</div> 
                        <div className="text-xs h-5 w-5 flex items-center justify-center rounded bg-[#E7F2FD] text-[#137FEC]">5</div>
                    </div>
                    <div className="bg-[#E7F2FD] flex flex-col items-center justify-center p-2 rounded-md cursor-pointer">
                        <div className="text-[#137FEC]"><IoIosCreate /></div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md mt-2 flex items-center py-2 px-4 mx-3 spa">
                    <div className="text-gray-400"><IoSearch /></div>
                    <input className="px-2 w-full" type="text"   placeholder="Search Conversation"/>
                </div>
                <main className="mt-5">
                    <div className="mx-2 rounded-md border-l-4 border-[#137FEC] bg-blue-100 h-18 flex items-center px-2">
                        <div className="avatar w-16 h-13 rounded-full bg-blue-300"></div>
                        <div className="justify-between mx-1 w-full">
                            <div className="flex justify-between w-full">
                                <div className="font-medium">Jane Doe</div>
                                <div className="text-sm mt-1">10:30AM</div>
                            </div>
                            <div className="mt-1 flex w-full justify-between">
                                <div className="text-sm font-medium">Hey are we still on for the meeting t...</div>
                                <div className="h-5 w-5 bg-[#137FEC] text-white rounded-full text-center flex font-bold justify-center items-center text-xs">1</div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="mx-2 rounded-md h-18 flex items-center px-2">
                        <div className="avatar w-16 h-13 rounded-full bg-blue-300"></div>
                        <div className="justify-between mx-1 w-full">
                            <div className="flex justify-between w-full">
                                <div className="font-medium">Jane Doe</div>
                                <div className="text-sm mt-1">Yesterday</div>
                            </div>
                            <div className="mt-1 flex w-full justify-between">
                                <div className="text-sm font-medium">Hey are we still on for the meeting t...</div>
                                <div className="h-5 w-5 bg-[#137FEC] text-white rounded-full text-center flex font-bold justify-center items-center text-xs">1</div>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </section>
            <div className="bg-gray-300 min-h-screen flex-1">

            </div>

        </div>


        {/* <a onClick={logout}>Logout</a> */}
    </div>
  )
}

export default DashboardLayout