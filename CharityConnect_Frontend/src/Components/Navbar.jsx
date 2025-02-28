import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">        
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to='/' className="nav-link px-2">Home</Link></li>
                    <li><Link to="/charities" className="nav-link px-2">Charities</Link></li>
                    <li><Link to="/about" className="nav-link px-2">About Us</Link></li>
                    <li><Link to="/contact" className="nav-link px-2">Contact  Us</Link></li>
                </ul>
                <div className="col-md-3 text-end">
                    <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                    <Link to="/signup"><button type="button" className="btn btn-outline-primary">Sign-up</button></Link>
                </div>
            </header>
        </div>
    );
}

export default Navbar;