import React from "react"
import RadioInputStyle from "./Radio.module.css"

const RadioInput = ({ label, setGender }) => {

    const Change = () => {
        let radio = document.getElementById("checked")

        if (radio.checked === true) {
            setGender(radio.value)
        } else {
            setGender("")
        }
    }

    return (
      <>
          <div className={RadioInputStyle.radio_div}>
            <div className={RadioInputStyle.toggle_btn}>
                <input type="radio" name="ge" 
                id="checked"
                value={label}
                onClick={Change}
                 />
                <div className={RadioInputStyle.round}></div>
            </div>
            <span id="label"> {label} </span>
        </div>
      </>
    )
}

export default RadioInput