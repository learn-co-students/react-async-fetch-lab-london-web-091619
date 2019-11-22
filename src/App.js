import React, { Component } from 'react'

const astrosURL = "http://api.open-notify.org/astros.json"

export default class App extends Component {
  state = {
    astros: []
  }

  componentDidMount() {
    fetch(astrosURL)
      .then(resp => resp.json())
      .then(json => this.setState({astros: json.people}))
  }

  render() {
    return (
      <ul>
        {this.state.astros.length === 0
          ? null
          : this.state.astros.map((astro, idx) => (
            <li key={idx}>{astro.name}</li>
        ))}
      </ul>
    )
  }
}
