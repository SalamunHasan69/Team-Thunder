import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])
  console.log(players);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 max-w-[1300px] mx-auto items-center	'>
      {
        players.map(xyz => <Player xyz={xyz} key={xyz.id}></Player>)
      }
    </div>
  );
};

export default Players;