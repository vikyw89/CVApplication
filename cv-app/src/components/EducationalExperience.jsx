import React from "react";
import styles from './EducationalExperience.module.css'
import { EducationalExperienceCard } from "./EducationalExperienceCard";

const EducationalExperience = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Educational Experience
            </div>
            <EducationalExperienceCard/>
            <EducationalExperienceCard/>
            <button type="button" className={styles.add}>Add</button>
        </div>
    )
}

export { EducationalExperience }