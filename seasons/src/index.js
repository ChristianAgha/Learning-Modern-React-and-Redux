import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        // This is the only time we do a direct assignment to this.state!
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // to update state, CALL setState!!! We DO NOT write: this.state.lat = position.coords.latitude
                this.setState({ lat: position.coords.latitude })

            },
            (err) => console.log(err)
        );
    }

    // React demands we define the render method
    render() {
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);