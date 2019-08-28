import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'All Star', duration: '2:40' },
        { title: 'Macarena', duration: '5:35' },
        { title: 'I want it that way', duration: '3:55' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

