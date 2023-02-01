import styles from './ExperienceCard.module.css'
import React from 'react'

const ExperienceCard = () => {
    return (
        <div className={styles.container}>
            <label htmlFor="experience">Experience :</label>
            <input id="experience"/>
        </div>
    )
}

export { ExperienceCard }