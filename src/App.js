// create your App component here
import React, {Component} from 'react'

export default class App extends Component { 

    state = { 
        space : [] 
    }


    fetchSpacePeople = () => { 
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(space = this.setState({space: space})
    }

    componentDidMount() { 
        this.fetchSpacePeople()
    }

   
    render () { 

        const space = this.state

        return <div>{space}</div>
    }

}

