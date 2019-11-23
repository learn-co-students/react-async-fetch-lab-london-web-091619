import React, {Component} from 'react'

export default class App extends Component {

    state = {
        astros: []
    }


    fetchSpacePeople = () => {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(astros => this.setState({astros:astros}))
    }

    componentDidMount(){
        this.fetchSpacePeople()
    }

    render(){
        return <div>{this.state.astros}</div>
    }
}


