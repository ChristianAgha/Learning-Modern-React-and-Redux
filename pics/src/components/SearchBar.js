import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ""
    }

    onFormSubmit = (event) => {
        // By default if you press return while in the search bar the
        // form tried to submit.. this prevents it
        event.preventDefault();
        // this.props.onSubmit <<< the way to access the onSearchSubmit
        // function being passed on from the App component
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;