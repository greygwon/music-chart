import React, { Component } from 'react';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this._getTracks();
    this._getArtists();
  }

  _getTracks = () => {
    fetch(
      'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=7aaf6effd4b92a2dc1415ee9aeaaa040&format=json&limit=10'
    )
      .then(res => res.json())
      .then(json => json.tracks.track)
      .then(tracks => {
        this.setState({
          tracks,
        });
      });
  };

  _getArtists = () => {
    fetch(
      'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=7aaf6effd4b92a2dc1415ee9aeaaa040&format=json&limit=10'
    )
      .then(res => res.json())
      .then(json => json.artists.artist)
      .then(artists => {
        this.setState({
          artists,
        });
        console.log(artists);
      });
  };

  _renderTracks = () => {
    const track = this.state.tracks.map((track, index) => {
      return (
        <TopTracks
          image={track.image[2]['#text']}
          trackName={track.name}
          artistName={track.artist.name}
          key={index}
          id={index + 1}
        />
      );
    });
    return track;
  };

  _renderArtists = () => {
    const artist = this.state.artists.map((artist, index) => {
      return (
        <TopArtists
          image={artist.image[2]['#text']}
          artistName={artist.name}
          key={index}
          id={index + 1}
        />
      );
    });
    return artist;
  };

  render() {
    return (
      <div className="App">
        {this.state.tracks ? this._renderTracks() : 'Loading'}
        {this.state.artists ? this._renderArtists() : 'Loading'}
      </div>
    );
  }
}

export default App;
