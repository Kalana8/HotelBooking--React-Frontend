// Global state for rooms, filters, and loading
import { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../db/data";


// Create a context object to share state
const RoomInfo = createContext();


// Context provider component: wraps the app and exposes shared state/actions
export const RoomContext = ({ children }) => {

  // Rooms displayed, loading indicator for simulated async operations
  const [rooms, setRooms] = useState(roomData);
  const [loading, setLoading] = useState(false);

  // Guest selection state
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);


  // Recompute total guests whenever adults/kids change (reads first char digit)
  useEffect(() => { setTotal(+adults[0] + +kids[0]) });


  // Reset guest filters and room list back to defaults
  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    setRooms(roomData)
  };


  // Filter rooms by total guests when user clicks "Check Now"
  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);

    // Filter rooms based on capacity (maxPerson)
    const filterRooms = roomData.filter(room => total <= room.maxPerson)

    setTimeout(() => {
      setLoading(false);
      setRooms(filterRooms); // Update UI with filtered rooms after delay
    }, 3000);
  }


  // Values and actions available via context to child components
  const shareWithChildren = {
    rooms, loading,
    adults, setAdults,
    kids, setKids,
    handleCheck,
    resetRoomFilterData,
  };


  return (
    <RoomInfo.Provider value={shareWithChildren}>
      {
        children
      }
    </RoomInfo.Provider>
  )
}

export const useRoomContext = () => useContext(RoomInfo);