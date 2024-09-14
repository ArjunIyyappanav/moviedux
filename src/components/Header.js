import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <div className='header'>
            <img className="logo" src="logo.png" alt="Logo" />
            <h2>Its time for popcorn!!</h2>
        </div>
    );
}