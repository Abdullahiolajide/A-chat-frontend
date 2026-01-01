import { Link } from "react-router-dom"

function Logo(props: {size: String}){
  return (
    <Link to={'/'}>
    <div className={`text-blue-900 text-xl font-medium flex items-center space-x-2`}> 
      <div className="rounded-md overflow-hidden w-fit">
      <img className="md:w-12 w-10" src="https://feynmanai.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black-bg.4b52f545.png&w=128&q=75" alt="" /></div> 
    <div>
      NoteChat AI
    </div>
    </div>
    </Link>
  )
}

export default Logo