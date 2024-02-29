import React from "react";
import { Link, useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products')
    }
    return(
    <>
    <h1>My Home Page</h1>
    <p>Go To <Link to='products'> The List of Products</Link></p>
    <button onClick={navigateHandler}>Navigate</button>
    </>
    );
}

export default HomePage;