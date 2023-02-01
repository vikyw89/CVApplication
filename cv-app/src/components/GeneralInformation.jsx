import React from "react";
import styles from './GeneralInformation.module.css'

const GeneralInformation = (props) => {
    const {data, setData} = props
    const changeHandler = (e) => {
        e.stopPropagation()
        const formData = new FormData(e.target.form)
        const formDataObj = Object.fromEntries(formData.entries())
        setData({...data, general:formDataObj})
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                General Information
            </div>
            <form className={styles.form} onChange={changeHandler}>
                <input id="firstName" name="firstName" placeholder="First name..."/>
                <input id="middleName" name="middleName" placeholder="Middle name..."/>
                <input id="lastName" name="lastName" placeholder="Last name..."/>
                <input id="email" name="email" type="email" placeholder="Email address..."/>
                <input id="phone" name="phone" placeholder="Phone number..."/>
            </form>
        </div>
    )
}

export { GeneralInformation }