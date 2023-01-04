import React, { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { validInputText } from "../ControlFields/ControlField"
import RadioInput from "../radioInput/Radio"
import FormStyle from "./Form.module.css"

const Form = ({
    firstname, 
    lastname, 
    gender, 
    telephone, 
    setOpen,
    setFirstname,
    setLastname,
    setGender,
    setTelephone }) => {

    const [genders, setGenders] = useState("")
    if (genders) {
        console.log(genders)
    }

    const [value, setValue] = useState({
        firstname: firstname ? firstname : "",
        lastname: lastname ? lastname : "",
        telephone: telephone ? telephone : ""
    });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        let btn = document.getElementById("btn-send")

        if (
            validInputText(value.firstname, "firstname-error", "text")
            && validInputText(value.lastname, "lastname-error", "text")
            && validInputText(value.telephone, "tel-error", "tel")
        ) {
            let firstname = value.firstname,
                lastname = value.lastname,
                telephone = value.telephone;
        }
        
        btn.classList.add("progress")

        setTimeout(() => {
            btn.classList.remove("progress")
        }, 2000)

    }

    useEffect(() => {

    }, [setValue])


    return (
        <div className={FormStyle.formback}>
            <div className={FormStyle.form_content}>
                <span className={FormStyle.close_form}
                    onClick={() => setOpen(false)}>&times;</span>
                <form>
                    <h1> New User <FaEdit /> </h1>
                    <div className={FormStyle.div_input}>
                        <label>FirstName</label>
                        <input type="text" name="firstname"
                            placeholder="..."
                            value={value.firstname}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.firstname, "firstname-error", "text")} />
                        <span id="firstname-error"></span>
                    </div>
                    <div className={FormStyle.div_input}>
                        <label>LastName</label>
                        <input type="text" name="lastname"
                            placeholder="..."
                            value={value.lastname}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.lastname, "lastname-error", "text")} />
                        <span id="lastname-error"></span>
                    </div>
                    <div className={FormStyle.radio_group}>
                        <RadioInput label={"M"} setGender={setGenders} />
                        <RadioInput label={"F"} setGender={setGenders} />
                    </div>
                    <div className={FormStyle.div_input}>
                        <label>Télephone</label>
                        <input type="text" name="telephone"
                            placeholder="..."
                            value={value.telephone}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.telephone, "tel-error", "tel")} />
                        <span id="tel-error"></span>
                    </div>
                    <div>
                        <button id="btn-send"
                        onClick={handleSubmit}> Save </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form