import React from "react";
import styles from './EducationalExperienceCard.module.css'

const EducationalExperienceCard = (props) => {
    const { data, setData, index, card } = props

    const changeHandler = (e) => {
        e.stopPropagation()
        const formData = new FormData(e.target.form)
        const formDataObj = Object.fromEntries(formData.entries())
        const newEducation = [...data.education]
        newEducation[index] = formDataObj
        setData({...data, education:newEducation})
    }
    
    return (
        <div className={styles.container}>
            <form className={styles.form} onChange={changeHandler}>
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
            <button type="button" className={styles.delete}>Delete</button>
        </div>
    )
}

export { EducationalExperienceCard }