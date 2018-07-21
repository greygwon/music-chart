import React from 'react';
import './TopTracks.css';

function TopTracks(props) {
  return (
    <div>
      <div id="con">
        <div id="id">{props.id}</div>
        <div id="img">
          <img src={props.image} alt="" />
        </div>
        <ul>
          <li>{props.trackName}</li>
          <li>{props.artistName}</li>
        </ul>
      </div>
    </div>
  );
}

export default TopTracks;
