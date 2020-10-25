import React,{ useState } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title:'Hym for the weekend', id:'1'},
        { title:'Let her go', id:'2'},
        { title:'Closer', id:'3'},
    ]);
    const addSong = (title) => {
        setSongs([...songs, { title:title, id:uuid() } ])
    }
    return(
        <div className="song-list">
            <ul>
                {
                    songs.map(song =>{ 
                        return(<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
        </div>      
    )
}

export default SongList;