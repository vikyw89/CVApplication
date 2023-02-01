import React from "react";
import styles from './PracticalExperience.module.css'
import { PracticalExperienceCard } from "./PracticalExperienceCard";

const PracticalExperience = (props) => {
    const { data, setData } = props
    const { practical } = data

    const addForm = (e) => {
        const newPractical = practical.concat('')
        setData({...data, practical:newPractical})
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Practical Experience
            </div>
            {practical.map((card, index)=>{
                return <PracticalExperienceCard key={index} index={index} card={card} {...props}/>
            })}
            <button type="button" className={styles.add} onClick={addForm}>Add</button>
        </div>
    )
}

export { PracticalExperience }