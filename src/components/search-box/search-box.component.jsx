import React from 'react';
import './search-box.style.css';

const SearchBox=({placeholder,handleChange})=>{

    //above is destructring concept 
    //const placeholder=props.placeholder
    //const handleChange=props.handleChange
                return(
                    <input className="search" type='search' placeholder={placeholder}
                    onChange={handleChange}/>
                       )
}

export default SearchBox;