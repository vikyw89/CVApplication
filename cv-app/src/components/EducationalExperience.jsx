import React from "react";
import styles from './EducationalExperience.module.css'

const EducationalExperience = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Educational Experience
            </div>
            <form className={styles.form}>
                <input id="institutionName" name="institutionName" placeholder="Institution name..."/>
                <input id="location" name="location" placeholder="Location..."/>
                <input id="subject" name="subject" placeholder="Subject..."/>
                <input id="degree" name="degree" placeholder="Degree..."/>
                <div className={styles.subform}>
                    <label htmlFor="eduStartDate">Start date :</label>
                    <input id="eduStartDate" name="startDate" type="date" placeholder="Start date..."/>
                </div>
                <div className={styles.subform}>
                    <label htmlFor="eduEndDate">End date :</label>
                    <input id="eduEndDate" name="endDate" type="date" placeholder="End date..."/>
                </div>
            </form>
        </div>
    )
}

export { EducationalExperience }