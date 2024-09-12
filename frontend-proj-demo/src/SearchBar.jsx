import { useState } from 'react'

import { FcSearch } from "react-icons/fc";
import './SearchBar.css'

function SearchBar(params) {
    return (
        <div class="Card">
            <div class="CardInner">
                <label>Search for Images by Typing in a Prompt</label>
                <div class="container">
                    <div class="InputContainer">
                        <FcSearch class="search" size={25}/>
                        <input class="textbox" placeholder="Enter your prompt here"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
    


export default SearchBar;