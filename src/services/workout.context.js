import React, { useState, createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  const [inWorkout, setinWorkout] = useState(true);

  const setWorkoutMode = () => {
    setinWorkout(!inWorkout);
  };

  return (
    <WorkoutContext.Provider
      value={{ inWorkout, setWorkoutMode: setWorkoutMode }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
