import React from 'react'
import style from 'styled-components'
import {randomColor} from '../styles'

const UserCard = style.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 15vw;
	height: 15vw;
	margin: 40px;
	z-index: -1;
`
// Copy all styles from UserCard
const CardContent = style(UserCard)`
	width: 70%;
	height: 70%;
	margin: 0;
	background-color: white;
`

export default (props) => {
	const {user} = props
	return (
		<UserCard style={{transform: `rotate(${(Math.random() < 0.5 ? -1 : 1) * (Math.random() * 15)}deg)`, backgroundColor: randomColor()}}>
			<CardContent>
				<img src={user.profileImage} width="50%" style={{marginBottom: "5px"}} />
				{user.username}
			</CardContent>
		</UserCard>
	)
}