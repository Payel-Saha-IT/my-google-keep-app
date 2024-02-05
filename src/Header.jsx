import React from 'react';
import Image from './Images/keep-512.png'; 
const Header=()=>{
    return (<>
       <div className='header'>
        <img src={Image} alt="logo" width='70' height='50'/>
        <h1>Payel Keep</h1>
       </div>
    </>);
}

export default Header;