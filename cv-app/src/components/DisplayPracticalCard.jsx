import React from "react";
import styles from "./DisplayPracticalCard.module.css"

const DisplayPracticalCard = (props) => {
    const {companyName, position, jobDescription, pStartDate, pEndDate } = props.card

    return (
        <div className={styles.container}>
            <div className={styles.companyName}>
                {companyName}
            </div>
            <div className={styles.position}>
                {position}
            </div>
            <div className={styles.jobDescription}>
                {jobDescription}
            </div>
            <div className={styles.date}>
                {pStartDate} - {pEndDate}
            </div>
        </div>
    )
}

export { DisplayPracticalCard }