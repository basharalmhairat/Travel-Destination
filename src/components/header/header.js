// import '../App.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (

        <>
            <h1> welcome to my travel destination</h1>
            <nav>
                <Link to='/'>  Home </Link>
                <Link to='/tours'>  More details  </Link>
                
            </nav>
            
            
        </>

    );
}

export default Header;