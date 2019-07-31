import style from 'styled-components'

export const MyDiv = style.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const randomColor = () => {
	return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
}