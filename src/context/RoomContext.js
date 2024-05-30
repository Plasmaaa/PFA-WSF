// src/context/RoomContext.js
import React, { createContext, useState } from 'react';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState({});

  const setRoomClicked = (roomId, roomData) => {
    setRooms(prevRooms => ({
      ...prevRooms,
      [roomId]: roomData
    }));
  };

  return (
    <RoomContext.Provider value={{ rooms, setRoomClicked }}>
      {children}
    </RoomContext.Provider>
  );
};
