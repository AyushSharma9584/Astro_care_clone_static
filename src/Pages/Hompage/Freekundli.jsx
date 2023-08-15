import React from 'react'
import styles from './Freekundli.module.css'

import zodiclogo from "../../Assets/zodiac-signs-banner.webp"

 export const Freekundli = () => {
  return (
    <div>
        <div className={styles.part_1_as}>
            <div className={styles.part_1_heading}>
                <h1>Free Kundli Online</h1>
                <p>Get instant & accurate,<br/>
                Janam Kundli</p>
            </div>
            <div className={styles.part_1_img}>
            <img className={styles.part_1_logo} src={zodiclogo} />

            </div>

        </div>
    </div>
  )
}

