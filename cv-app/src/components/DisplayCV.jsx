import React from "react";
import { useState } from "react";
import styles from './DisplayCV.module.css'
import { DisplayEducationCard } from "./DisplayEducationCard";
import { DisplayPracticalCard } from "./DisplayPracticalCard";

const DisplayCV = (props) => {
    const {data} = props
    const {general, education, practical} = data
    const {prefix, firstName, middleName, lastName, title, email, phone, photo, description} = general
    const showEducation = education.length !== 0
    const showPractical = practical.length !== 0
    const photoDisplay = photo ? URL.createObjectURL(photo) : ''

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.fullName}>
                    {prefix} {firstName} {middleName} {lastName}
                </div>
                <div className={styles.nameTitle}>
                    {title}
                </div>
            </div>
            <div className={styles.sidebar}>
                <img src={photoDisplay}/>
                <div className={styles.email}>
                    {email}
                </div>
                <div className={styles.phone}>
                    {phone}
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.description}>
                    <div className={styles.title}>
                        Description
                    </div>
                    <div className={styles.descriptionContent}>
                        {description}
                    </div>
                </div>
                {
                showPractical &&
                <div className={styles.practical}>
                    <div className={styles.title}>
                        Practical Experience
                    </div>
                    {
                    practical.map((el, index)=>{
                        return <DisplayPracticalCard key={index} card={el}/>
                    })
                    }
                </div>
                }
                {
                showEducation &&
                <div className={styles.educational}>
                    <div className={styles.title}>
                        Educational Experience
                    </div>
                    {
                    education.map((el,index)=>{
                        return <DisplayEducationCard key={index} card={el}/>
                    })
                    }
                    <div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export { DisplayCV }