import React, { useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPlus, FaTrash, FaUserEdit } from "react-icons/fa"
import HomeStyle from "./Home.module.css"

import SearchBar from "../../components/searchBar/SearchBar"
import Form from "../../components/form/Form"
import Pagination from "../../components/pagination/Pagination"
import PDFComponent from "../../components/pdfComponent/PdfComponent"

const Home = () => {

    const [valueSearch, setSearchValue] = useState("")
    const [open, setOpen] = useState(false)
    
    const [nextt, setNextt] = useState(5)
    const [previous, setPrevious] = useState(0)

    const users = [
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
        { id: 1, fistname: "Marx", lastname: "Geek", gender: "M", telephone: "69816413" },
    ]

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [gender, setGender] = useState("")
    const [telephone, setTelephone] = useState("")

    const editUser = (firstname, lastname, gender, tel) => {
        
        setFirstname(firstname)
        setLastname(lastname)
        setGender(gender)
        setTelephone(tel)
        
        setOpen(true)
    }

    const searchUser = () => {
        console.log(valueSearch)
        const user = users.filter((list,{fistname}) => {
            return fistname.includes(valueSearch) ? list:list;
        })

        users = user
    }

    return (
        <div className={HomeStyle.home_content}>
            {open ? <Form firstname={firstname} 
                        lastname={lastname}
                        gender={gender}
                        telephone={telephone} 
                        setFirstname={setFirstname}
                        setLastname={setLastname}
                        setGender={setGender}
                        setTelephone={setTelephone}
                        setOpen={setOpen} />:"" }
                
            <PDFComponent /> 
            <button className={HomeStyle.add_btn}
                onClick={() => setOpen(true)}> <FaPlus /> New User </button>
            <SearchBar placeholderText={'Search user by name'}
                setValue={setSearchValue} searchUser={searchUser} />
            <div className={HomeStyle.div_table}>
                <div className={HomeStyle.head_table}>
                    <div> <span>N°</span> </div>
                    <div> <span>FirstName</span> </div>
                    <div> <span>LastName</span> </div>
                    <div> <span>Gender</span> </div>
                    <div> <span>Phone</span></div>
                    <div> <span>Action</span> </div>
                </div>
                <div className={HomeStyle.body_table}>
                    <table>
                        <tbody>
                            {
                                users && (
                                    users.map(({fistname, lastname, gender, telephone}, index) => {
                                        if (index >= previous && index <= nextt) {
                                            return <tr key={index}>
                                                <td> {(index + 1)} </td>
                                                <td> {fistname} </td>
                                                <td> {lastname} </td>
                                                <td> {gender} </td>
                                                <td> {telephone} </td>
                                                <td>
                                                    <button
                                                     onClick={() => editUser(fistname, lastname, gender, telephone)}> <FaUserEdit /> </button>
                                                    <button> <FaTrash /> </button>
                                                </td>
                                            </tr>
                                        }
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination nb={6} countTab={users.length}
                setNextt={setNextt} setPrevious={setPrevious}
                nextt={nextt} previous={previous} />
        </div>
    )
}

export default Home