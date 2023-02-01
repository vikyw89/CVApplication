import React from "react"
import styles from './PracticalExperienceCard.module.css'

const PracticalExperienceCard = (props) =>{
    const {data, setData, index, card } = props

    const changeHandler = (e) => {
        e.stopPropagation()
        const formData = new FormData(e.target.form)
        const formDataObj = Object.fromEntries(formData.entries())
        const newPractical = [...data.practical]
        newPractical[index] = formDataObj
        setData({...data, practical:newPractical})
    }

    const deleteCard = (e) => {
        e.stopPropagation()
        const newPractical = [...data.practical]
        newPractical.splice(index,1)
        setData({...data, practical:newPractical})
    }
    
    return (
        <div className={styles.container}>
            <form className={styles.form} onChange={changeHandler}>
                <input id="companyName" name="companyName" placeholder="Company name..." value={card.companyName}/>
                <input id="position" name="position" placeholder="Position..." value={card.position}/>
                <input id="jobDescription" name="jobDescription" placeholder="Job description..." value={card.jobDescription}/>
                <div className={styles.subform}>
                    <label htmlFor="pStartDate">Start date :</label>
                    <input id="pStartDate" name="pStartDate" type="date" placeholder="Start date..." value={card.pStartDate}/>
                </div>
                <div className={styles.subform}>
                    <label htmlFor="pEndDate">End date :</label>
                    <input id="pEndDate" name="pEndDate" type="date" placeholder="End date..." value={card.pEndDate}/>
                </div>
            </form>
            <button type="button" className={styles.delete} onClick={deleteCard}>Delete</button>
        </div>
    )
}

export { PracticalExperienceCard }