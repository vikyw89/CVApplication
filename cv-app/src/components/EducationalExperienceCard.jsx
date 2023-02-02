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
    
    const deleteCard = (e) => {
        e.stopPropagation()
        const newEducation = [...data.education]
        newEducation.splice(index,1)
        setData({...data, education:newEducation})
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onChange={changeHandler}>
                <input id="institutionName" name="institutionName" placeholder="Institution name..." value={card.institutionName}/>
                <input id="subject" name="subject" placeholder="Subject..." value={card.subject}/>
                <input id="degree" name="degree" placeholder="Degree..." value={card.degree}/>
                <div className={styles.subform}>
                    <label htmlFor="eduStartDate">Start date :</label>
                    <input id="eduStartDate" name="eduStartDate" placeholder="Start date..." value={card.eduStartDate}/>
                </div>
                <div className={styles.subform}>
                    <label htmlFor="eduEndDate">End date :</label>
                    <input id="eduEndDate" name="eduEndDate" placeholder="End date..." value={card.eduEndDate}/>
                </div>
            </form>
            <button type="button" className={styles.delete} onClick={deleteCard}>Delete</button>
        </div>
    )
}

export { EducationalExperienceCard }