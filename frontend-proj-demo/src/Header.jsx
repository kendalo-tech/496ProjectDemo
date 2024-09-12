import { useState } from 'react'
import { VscFeedback } from "react-icons/vsc";
import './header.css'

function Header(params) {
    return (
        <header className="header">
            <img src="https://cdn.prod.website-files.com/63c71c49bab7772da6023124/63c71c49bab77747b0023133_Ai.Fish%20Logo-2.png" alt="Company Logo" className="logo" />
            <div className='quickl'>
                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
    


export default Header;