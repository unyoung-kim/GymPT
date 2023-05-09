import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`;

const MainContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 25px;
  margin-left: 20px;
  margin-top: 15px;
`;

const Subtitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 15px;
  top: 10px;
  left: 10px;
  right: 0;
  bottom: 0;
`;

const WorkOutCard = styled.View`
  background-color: white;
  width: 320px;
  height: 300px;
  border-radius: 30px;
  margin-top: 30px;
`;

export const MainScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Title>Featured Workouts</Title>
      <ScrollView>
        <MainContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SetTime", {
                workout: "squat",
                img: "../../../assets/squat.jpg",
              });
            }}
          >
            <WorkOutCard>
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                }}
                imageStyle={{ borderRadius: 30 }}
                source={require("../../../assets/squat.jpg")}
              >
                <Subtitle>Squats</Subtitle>
              </ImageBackground>
            </WorkOutCard>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SetTime", {
                workout: "deadlift",
                img: "../../../assets/deadlift.jpg",
              });
            }}
          >
            <WorkOutCard>
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                }}
                imageStyle={{ borderRadius: 30 }}
                source={require("../../../assets/deadlift.jpg")}
              >
                <Subtitle>Deadlifts</Subtitle>
              </ImageBackground>
            </WorkOutCard>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SetTime", {
                workout: "Shoulder Press",
                img: "../../../assets/shoulder_press.jpg",
              });
            }}
          >
            <WorkOutCard>
              <ImageBackground
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                }}
                imageStyle={{ borderRadius: 30 }}
                source={require("../../../assets/shoulder_press.jpg")}
              >
                <Subtitle>Shoulder Press</Subtitle>
              </ImageBackground>
            </WorkOutCard>
          </TouchableOpacity>
        </MainContainer>
      </ScrollView>
    </SafeArea>
  );
};
