import React from 'react'
import style from 'styled-components'
import loading from '../Images/364.gif'

const LoaderContainer = style.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(255,255,255,0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`

export default (props) => {
	return(
		<LoaderContainer>
			<img src={loading} alt="Loading..." />
		</LoaderContainer>
	)
}