import React from 'react';
import Logo from '../Images/Group 1960.png'
import { Link} from 'react-router-dom';


const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-sm ">
            <div class="container">
                <a class="navbar-brand" href="/Login">
                    <img className='w-[300px]' src={Logo} alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                    <li class="nav-item">
                            <a class="nav-link" href='/Signup'>Signup !</a>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link text-dark d-none d-lg-block ">Don’t have an account?</p>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        

    );
}

export default Navbar;
