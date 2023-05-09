import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

export const WorkoutModeCard = ({
  workout,
  changeWorkoutMode,
  currSet,
  currRep,
  changeSet,
  resetRep,
}) => {
  return (
    <View style={styles.cardComponent}>
      <Text style={styles.Title}>{workout}</Text>
      <Text style={styles.Rep}>{currRep}</Text>
      <Text style={styles.Set}>Set {currSet}</Text>
      <Button
        style={styles.doneButton}
        icon="timer"
        mode="contained"
        onPress={() => {
          changeWorkoutMode();
          changeSet();
          resetRep();
        }}
      >
        Done - Start Timer
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  cardComponent: {
    alignItems: "center",
    backgroundColor: "#EFECEC",
    width: "100%",
    height: "25%",
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
  },
  doneButton: {
    backgroundColor: "black",
    marginTop: 10,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#8F8B8B",
  },
  Rep: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
  },
  Set: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});
