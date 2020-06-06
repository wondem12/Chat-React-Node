import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { userDataContext } from "../../context/user-data-context";

import './Join.css';

export default function SignIn() {
  const { userName, room, setUserName, setUserRoom } = useContext(userDataContext);


  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setUserName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setUserRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!userName || !room) ? e.preventDefault() : null} to='chat'>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}