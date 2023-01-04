import React, { useEffect, useState } from "react"
import { FaEdit, FaUserEdit } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { validInputText } from "../../../components/ControlFields/ControlField"
import { LOGIN_PAGE } from "../../../settings/constant"
import RegisterStyle from "./Register.module.css"

const Register = () => {
    const navigate = useNavigate()

    const [value, setValue] = useState({
        pseudo: "",
        email: "",
        passwd: "",
        passwdC: ""
    });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        let btn = document.querySelector(".btn_submit")

        if (
            validInputText(value.pseudo, "pseudo-error", "text")
            && validInputText(value.email, "email-error", "email")
            && validInputText(value.passwd, "passwd-error", "pwd")
            && validInputText(value.passwdC, "passwdC-error", "pwd")
        ) {
            let pseudo = value.pseudo,
                email = value.email,
                passwd = value.passwd,
                passwdC = value.passwdC;

            if (passwdC === passwd) {
                
                btn.classList.add(RegisterStyle.progress)

                setTimeout(() => {
                    btn.classList.remove(RegisterStyle.progress)
                }, 5000)
            }
        }
    }


    return (
        <div className={RegisterStyle.formback}>
            <button className={RegisterStyle.btn_login}
                onClick={() => navigate(LOGIN_PAGE)} >
                Login...
            </button>
            <div className={RegisterStyle.form_content}>
                <form>
                    <h1> Registration <FaUserEdit /> </h1>
                    <div className={RegisterStyle.div_input}>
                        <label>Pseudo</label>
                        <input type="text" name="pseudo"
                            placeholder="..."
                            value={value.pseudo}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.pseudo, "pseudo-error", "text")} />
                        <span id="pseudo-error">uhihii</span>
                    </div>
                    <div className={RegisterStyle.div_input}>
                        <label>Email</label>
                        <input type="text" name="email"
                            placeholder="..."
                            value={value.email}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.email, "email-error", "email")} />
                        <span id="email-error"></span>
                    </div>
                    <div className={RegisterStyle.div_input}>
                        <label>Password</label>
                        <input type="password" name="passwd"
                            placeholder="..."
                            value={value.passwd}
                            onChange={handleChange}
                            onKeyUp={ () => validInputText(value.passwd, "passwd-error", "pwd")} />
                        <span id="passwd-error"></span>
                    </div>

                    <div className={RegisterStyle.div_input}>
                        <label>Confirm password</label>
                        <input type="password" name="passwdC"
                            placeholder="..."
                            value={value.passwdC}
                            onChange={handleChange}
                            onKeyUp={() => validInputText(value.passwdC, "passwdC-error", "pwd")} />
                        <span id="passwdC-error"></span>
                    </div>
                    <div>
                        <button className="btn_submit"
                            onClick={handleSubmit} >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register