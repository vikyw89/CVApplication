import React from "react";
import styles from './DisplayEducationCard.module.css'

const DisplayEducationCard = (props) => {
    console.log(props)
    const { institutionName, location, subject, degree, eduEndDate, eduStartDate } = props.card
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                {eduStartDate} - {eduEndDate}
            </div>
            <div className={styles.institutionName}>
                {institutionName}
            </div>
            <div className={styles.location}>
                {location}
            </div>
            <div className={styles.subject}>
                {subject}
            </div>
            <div className={styles.degree}>
                {degree}
            </div>
        </div>
    )
}

export { DisplayEducationCard }