import React, {Component} from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard'
import {MyDiv} from '../styles'

class Users extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		axios("https://insta.nextacademy.com/api/v1/users")
		.then(resp => {
			const users = resp.data
			this.setState({users})
		})
	}

	render() {
		const {users} = this.state
		return(
			<MyDiv>
				{
					users.map(user => {
						return(
							<UserCard user={user}/>
						)
					})
				}
			</MyDiv>
		)
	}
}

export default Users