import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>3</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">M<span>CA</span>.</h1>
                    </div>
                    <div className="graduation__description">
                        <h1>Vidya Academy Of Science & Technology</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;2013 - 2016</h2>
                        <p>Completed MCA from Vidya Academy Of Science & Technology,Thrissur</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation