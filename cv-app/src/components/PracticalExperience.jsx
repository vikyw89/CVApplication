import React from "react";
import styles from './PracticalExperience.module.css'
import { PracticalExperienceCard } from "./PracticalExperienceCard";

const PracticalExperience = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Practical Experience
            </div>
            <PracticalExperienceCard {...props}/>
            <button type="button" className={styles.add}>Add</button>
        </div>
    )
}

export { PracticalExperience }