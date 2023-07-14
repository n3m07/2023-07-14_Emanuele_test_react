import {Link} from "react-router-dom"

function Header() {
    return (
        <nav className="w-full h-[60px] bg-slate-300 flex justify-between items-center gap-4 p-2">
            <div className="btns">
                <Link to='/'>Home</Link>
            </div>
          <div className="flex justify-end items-center gap-4 ">
                <div className="btns">
                    <Link to='/MoreInfo'>More Info</Link>
                </div>
                <div className="btns">
                    <Link to='/Contacts'>Contacts</Link>
                </div>
          </div>
        </nav>
    )
}

export default Header
