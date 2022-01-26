import {Link} from "react-router-dom";

const Navbar = () => {
    return (
       <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item active">
                           <Link className="nav-link" to="/">Trang Chủ <span className="sr-only">(current)</span></Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to="/create">Đăng Ký</Link>
                       </li>
                   </ul>
               </div>
           </nav>
       </>
    )
}

export default Navbar