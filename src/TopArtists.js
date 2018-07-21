import React from 'react';

function TopArtists(props) {
  return (
    <div>
      <div>{props.id}</div>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>{props.artistName}</div>
    </div>
  );
}

export default TopArtists;
