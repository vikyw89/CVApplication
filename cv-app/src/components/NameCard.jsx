import React from "react";
import styles from './NameCard.module.css'

const NameCard = () => {
    return (
        <div className={styles.container}>
            <label htmlFor="name">Name :</label>
            <input id="name"/>
        </div>
    )
}

export {NameCard}