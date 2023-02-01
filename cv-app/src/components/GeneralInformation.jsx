import React from "react";
import styles from './GeneralInformation.module.css'

const GeneralInformation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                General Information
            </div>
            <form className={styles.form}>
                <input id="firstName" placeholder="First name..."/>
                <input id="middleName" placeholder="Middle name..."/>
                <input id="lastName" placeholder="Last name..."/>
                <input id="email" type="email" placeholder="Email address..."/>
                <input id="phone" placeholder="Phone number..."/>
            </form>
        </div>
    )
}

export { GeneralInformation }