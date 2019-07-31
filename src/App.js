import React from 'react'
import Users from './containers/Users'
import Loader from './components/Loader'
import {MyDiv} from './styles'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  stopLoader = () => {
    this.setState({isLoading: false})
  }

  render() {
    return(
      <MyDiv>
        {
          this.state.isLoading && <Loader />
        }
        <Users />
      </MyDiv>
    )
  }
}

export default App;
