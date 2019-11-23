import React from 'react';

class App extends React.Component {
    state = {

    }

    componentDidMount(){
        return fetch(`http://api.open-notify.org/astros.json`)
            .then(resp => resp.json())
            .then(console.log)
    }

    render(){
        return(
            <h1>App</h1>
        )
    }
}

export default App;