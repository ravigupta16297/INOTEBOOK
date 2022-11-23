import React from 'react'
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";


const Navbar = () => {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);

    let history = useHistory();
    const handlelogout = (() => {
        localStorage.removeItem('token')
        history.push('/login');
    })
   const val = localStorage.getItem('uname');

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">I-NOTE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} to="/"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} to="/about">About-Us</Link>
                            </li>

                        </ul>

                        {(localStorage.getItem('token') === null)  ?

                            <div className="d-flex">
                               <h2>WELCOME TO INOTE {val}</h2>


                                <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                                <Link className="btn btn-primary" to="/signup">signup</Link>

                            </div> : <div><Link className="btn btn-primary" to="/info">User-Details</Link> <button className='btn btn-primary' onClick={handlelogout}>logout</button></div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
};
export default Navbar