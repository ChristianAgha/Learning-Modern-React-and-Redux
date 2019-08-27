import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    onSearchTermSubmit = (SearchTerm) => {
        youtube.get('/search', {
            params: {
                q: SearchTerm
            }
        });
    };

    render() {
        return (<div className="ui container">
                    <SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
                </div>);
    };
}

export default App;