import React, { useState } from "react"

import { FaPrint, FaSearch } from "react-icons/fa"
import SearchBarStyle from "./SearchBar.module.css"

const SearchBar = ({placeholderText, setValue, searchUser}) => {
    
    const [keyword, setKeyword] = useState("")

    const handleChange = () => {
    
        searchUser()
    }
    return (
        <>
            <div className={SearchBarStyle.searchbar}>
                <button className={SearchBarStyle.btn_print}> <FaPrint /> Print </button>
                <div className={SearchBarStyle.bar}>
                    <FaSearch />
                    <input type="text" name="keyword"
                    value={keyword.value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholderText} />
                </div>
            </div>
        </>
    )
}

export default SearchBar;