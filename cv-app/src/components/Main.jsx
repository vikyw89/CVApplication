import React from "react";
import styles from './Main.module.css'
import { GeneralInformation } from "./GeneralInformation";
import { EducationalExperience } from "./EducationalExperience";
import { PracticalExperience } from "./PracticalExperience";

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputForm}>
                <GeneralInformation/>
                <EducationalExperience/>
                <PracticalExperience/>
            </div>
            <div className={styles.display}>
                
            </div>
        </div>
    )
}

export { Main }