import React from "react";
import styles from './EducationalExperience.module.css'
import { EducationalExperienceCard } from "./EducationalExperienceCard";

const EducationalExperience = (props) => {
    const {data, setData} = props
    const {education} = data

    const addForm = (e) => {
        const newEducation = education.concat('')
        setData({...data, education:newEducation})
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Educational Experience
            </div>
            {education.map((card, index)=>{
               return <EducationalExperienceCard key={index} index={index} {...props}/> 
            })}
            <button type="button" className={styles.add} onClick={addForm}>Add</button>
        </div>
    )
}

export { EducationalExperience }