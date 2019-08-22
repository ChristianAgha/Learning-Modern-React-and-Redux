import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     // This is the ONLY time we do a direct assignment to this.state!!!
    //     this.state = { lat: null, errorMessage: "" };
    // }

    // Initializing the state (babel created a constructor out of this)
    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Calling setState is additive, as in specifying what lat is does not mess with 
            // the value or errorMessage and vice versa
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept the location request."/>;
    }

    // React demands we define the render method
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);