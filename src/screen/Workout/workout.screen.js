import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { TimerModeCard } from "./components/TimerModeCard";
import { useKeepAwake } from "expo-keep-awake";
import { RoundedButton } from "../../components/RoundedButton";
import { WorkoutContext } from "../../services/workout.context";
import CameraView from "../../../Camera";
import { WorkoutModeCard } from "./components/WorkoutModeCard";

export const WorkOutScreen = ({ navigation, route }) => {
  useKeepAwake();

  const { workout, restTime, sets, reps } = route.params;
  const { inWorkout, setWorkoutMode } = useContext(WorkoutContext);
  const [currSet, setCurrSet] = useState(1);
  const [currRep, setCurrRep] = useState(reps);

  const changeWorkoutMode = () => {
    setWorkoutMode(!inWorkout);
  };

  const changeRep = () => {
    setCurrRep(currRep - 1);
  };

  const resetRep = () => {
    setCurrRep(reps);
  };

  const changeSet = () => {
    setCurrSet(currSet + 1);
  };

  if (currSet == sets && currRep == 0) {
    //Completed all the sets
    setCurrSet(1);
    navigation.navigate("Home");
  } else if (currRep == 0) {
    setWorkoutMode(!inWorkout);
    setCurrRep(reps);
    setCurrSet(currSet + 1);
    //Completed all the reps
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CameraView
        changeRep={changeRep}
        inWorkout={inWorkout}
        workout={workout}
      />
      {inWorkout && (
        <WorkoutModeCard
          workout={workout}
          changeWorkoutMode={changeWorkoutMode}
          currSet={currSet}
          currRep={currRep}
          changeSet={changeSet}
          resetRep={resetRep}
        />
      )}
      {!inWorkout && (
        <TimerModeCard
          workout={workout}
          restTime={restTime}
          currSet={currSet}
          changeWorkoutMode={changeWorkoutMode}
        />
      )}

      {/* When in workout, show CountRepsCard, when not in workout, show TimerCard  */}

      {/* <View
        style={{ width: "100%", alignItems: "center", position: "absolute" }}
      > */}
      {/* {!inWorkout && (
          <Text>Here</Text>
          // <TimerModeCard style={{ height: "100%" }} restTime={restTime} />
        )}
        {inWorkout && (
          <View>
            <Text>WorkOut Count goes here</Text>
          </View>
        )} */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardComponent: {
    backgroundColor: "black",
    width: "100%",
    height: "25%",
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
  },
});
