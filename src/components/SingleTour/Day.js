import React,{useState} from 'react'
import styles from '../../css/day.module.css'
import {FaAngleDown} from 'react-icons/fa'

const Day = ({day, info}) => {

const [showInfo, setInfo] = useState(false)

const toggleInfo = () => {
	setInfo( showInfo ? false : true)
}

	return (
		<article className={styles.day}>
			<h4>
				{day}
			<button onClick={toggleInfo} className={styles.btn}>
				<FaAngleDown />
			</button>
			</h4>
			{showInfo && <p>{info}</p>}
		</article>
	)
}

export default Day
