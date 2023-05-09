import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Countdown } from "../../../components/Countdown";
import { useKeepAwake } from "expo-keep-awake";
import { RoundedButton } from "../../../components/RoundedButton";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const TimerModeCard = ({
  workout,
  restTime,
  currSet,
  changeWorkoutMode,
}) => {
  useKeepAwake();
  const [isStarted, setisStarted] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(restTime / 60);

  const onEnd = (reset) => {
    // Vibration.vibrate(PATTERN);
    setisStarted(false);
    setProgress(1);
    reset();
    changeWorkoutMode();
  };

  return (
    <View style={styles.cardComponent}>
      <Text style={styles.Title}>{workout}</Text>
      <Countdown
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={setProgress}
        onEnd={onEnd}
      />
      <Text style={styles.Set}>To Set {currSet}</Text>

      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        {!isStarted && (
          <IconButton
            icon="play"
            color="#8BDE93"
            onPress={() => {
              setisStarted(true);
            }}
          />
        )}
        {isStarted && (
          <IconButton
            color="#F9ACAC"
            icon="pause"
            onPress={() => {
              setisStarted(false);
            }}
          />
        )}
        <Button
          style={styles.doneButton}
          mode="contained"
          onPress={changeWorkoutMode}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardComponent: {
    backgroundColor: "#EFECEC",
    width: "100%",
    height: "25%",
    position: "absolute",
    bottom: 0,
    borderRadius: 15,

    alignItems: "center",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#8F8B8B",
  },
  Set: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  doneButton: {
    backgroundColor: "black",
    marginLeft: 10,
  },
});
