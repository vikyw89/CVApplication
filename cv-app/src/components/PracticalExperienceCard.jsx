import React from "react"
import styles from './PracticalExperienceCard.module.css'

const PracticalExperienceCard = (props) =>{
    const {data, setData} = props

    const changeHandler = (e) => {
        e.stopPropagation()
        const formData = new FormData(e.target.form)
        const formDataObj = Object.fromEntries(formData.entries())
        setData({...data, practical:formDataObj})
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onChange={changeHandler}>
                <input id="companyName" name="companyName" placeholder="Company name..."/>
                <input id="position" name="position" placeholder="Position..."/>
                <input id="jobDescription" name="jobDescription" placeholder="Job description..."/>
                <div className={styles.subform}>
                    <label htmlFor="pStartDate">Start date :</label>
                    <input id="pStartDate" name="startDate" type="date" placeholder="Start date..."/>
                </div>
                <div className={styles.subform}>
                    <label htmlFor="pEndDate">End date :</label>
                    <input id="pEndDate" name="endDate" type="date" placeholder="End date..."/>
                </div>
            </form>
            <button type="button" className={styles.delete}>Delete</button>
        </div>
    )
}

export { PracticalExperienceCard }