import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        backgroundImage: "url('https://media.istockphoto.com/photos/dubai-skyline-uae-picture-id1198064581?k=20&m=1198064581&s=612x612&w=0&h=G0RporwfPcbGLmOqtutepA-7fmtKuSF2oxJ63Wst2sU=')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white', 
        textAlign: 'center',
        paddingBottom: '50px'
    }

    return (
        <div style={headerStyle}>
            <nav className="nav">
                <ul style={{padding: '20px', listStyleType: 'none', display: 'grid', gridTemplateColumns: 'auto auto auto auto', gridGap: '10px'}}>
                    <li style={{color: 'red'}}>
                        <img style={{height: '30px', borderRadius: '50%'}} src="https://www.logolynx.com/images/logolynx/26/26688de96efd09f18bccc5b9ab8a96ce.jpeg" alt=""/>
                    </li>
                    <li >
                        <Link to="/home" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book" style={{color: 'white', textDecoration: 'none'}}>Book</Link>
                    </li>
                </ul> 
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian Luxury</h2>
            </div>
        </div>
    );
};

export default Header;