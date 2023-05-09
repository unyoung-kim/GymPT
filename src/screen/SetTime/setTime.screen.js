import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-paper";

import styled from "styled-components";
import SelectDropdown from "react-native-select-dropdown";

const MainContainer = styled.View`
  background-color: black;
  flex: 1;
`;

const Title = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 20px;
  margin: 25px;
`;

const Subtitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 15px;
  margin-left: 10px;
  margin-right: 15px;
`;

const Container = styled.View`
  flex: 1;
  padding: 5%;
  background-color: "white";
`;

const SetInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10%;
`;

const Input = styled(TextInput)`
  border-radius: 25px;
  width: 200px;
  height: 60px;
  background-color: white;
  font-size: 20px;
  text-align: center;
`;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export const SetTimeScreen = ({ navigation, route }) => {
  const workout = route.params.workout;
  let img = "";
  if (workout == "squat") {
    img = require(`../../../assets/squat.jpg`);
  } else if (workout == "deadlift") {
    img = require(`../../../assets/deadlift.jpg`);
  } else {
    img = require(`../../../assets/shoulder_press.jpg`);
  }

  const timeOptions = [5, 30, 60, 90, 120, 150];

  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);
  const [restTime, setRestTime] = useState(0);

  //   useEffect(() => {}, [reps, sets, restTime]);

  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <Image style={{ width: "100%", height: "40%" }} source={img} />
        <MainContainer>
          <Title>{workout}</Title>

          <Container>
            <SetInfoContainer>
              <Subtitle>Reps:</Subtitle>
              <Input
                value={reps}
                onChangeText={(newreps) => {
                  setReps(newreps);
                }}
                keyboardType="numeric"
                style={{ marginLeft: 38 }}
              />
            </SetInfoContainer>

            <SetInfoContainer>
              <Subtitle>Sets:</Subtitle>
              <Input
                value={sets}
                onChangeText={(newsets) => {
                  setSets(newsets);
                }}
                keyboardType="numeric"
                style={{ marginLeft: 40 }}
              />
            </SetInfoContainer>

            <SetInfoContainer>
              <Subtitle>Rest(sec):</Subtitle>
              <SelectDropdown
                value={restTime}
                buttonStyle={{
                  borderRadius: 25,
                  width: 200,
                  height: 60,
                  backgroundColor: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
                data={timeOptions}
                onSelect={(newRestTime) => {
                  setRestTime(newRestTime);
                }}
              />
            </SetInfoContainer>

            <Button
              icon="camera"
              mode="outline"
              buttonColor="white"
              onPress={() => {
                navigation.navigate("Workout", {
                  restTime: restTime,
                  workout: workout,
                  sets: sets,
                  reps: reps,
                });
              }}
            >
              Start
            </Button>
          </Container>
        </MainContainer>
      </View>
    </DismissKeyboard>
  );
};
