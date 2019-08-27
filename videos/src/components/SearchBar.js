import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        // Stops the form from submitting whenever return is pressed
        event.preventDefault();
        //Call back function that sends the search term to the App component's onSearchTermSubmit func
        this.props.onSearchTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;