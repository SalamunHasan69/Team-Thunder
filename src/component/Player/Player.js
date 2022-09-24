import React from 'react';
import './Player.css'

const Player = (props) => {
  const { picture, name, title, gender, link } = props?.xyz;
  return (
    <div>
      <div className="card card-side shadow-xl bg-red-100 m-[20px]">
        <figure><img className='w-40 h-full' src={picture} alt="Movie" /></figure>
        <div className="card-body">
          <div>
            <h2>{name}</h2>
            <small>Title: {title}</small>
            <h4>Gender: {gender}</h4>
          </div>
          <div className="card-actions justify-end self-end	text-white">
            <a target="_blank" href={link}><button className="btn btn-outline btn-primary">Hire me</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;