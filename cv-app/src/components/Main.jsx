import React from "react";
import styles from './Main.module.css'
import { GeneralInformation } from "./GeneralInformation";
import { EducationalExperience } from "./EducationalExperience";
import { PracticalExperience } from "./PracticalExperience";
import { useState } from "react";

const Main = () => {
    const [data, setData] = useState({
        general: '',
        education: [],
        practical: [],
    })
    return (
        <div className={styles.container}>
            <div className={styles.inputForm}>
                <GeneralInformation data={data} setData={setData}/>
                <EducationalExperience data={data} setData={setData}/>
                <PracticalExperience data={data} setData={setData}/>
            </div>
            <div className={styles.display}>
                
            </div>
        </div>
    )
}

export { Main }