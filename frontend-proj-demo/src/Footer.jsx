import { useState } from 'react'
import { VscFeedback } from "react-icons/vsc";
import './Footer.css'

function Footer(params) {
    return (
        <footer className="footer">
            <img src="https://cdn.prod.website-files.com/63c71c49bab7772da6023124/63c71c49bab77747b0023133_Ai.Fish%20Logo-2.png" alt="Company Logo" className="logo" />
            <div className='quickl'>
                <nav>
                    <ul>
                        <li><a href="/about">FAQ</a></li>
                        <li><a href="/contact">Documentation</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
    


export default Footer;