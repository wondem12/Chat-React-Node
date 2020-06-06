import React, { useState } from "react";

export const userDataContext = React.createContext({
  userName: "",
  room: "",
  setUserName: () => {},
  setUserRoom: () => {}
});

export default ({ children }) => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  const setUserName = name => {
    setUser(name);
  };
  const setUserRoom = name => {
    setRoom(name);
  };
  return (
    <userDataContext.Provider
      value={{
        userName: user,
        room: room,
        setUserName: setUserName,
        setUserRoom: setUserRoom
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};
