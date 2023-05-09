import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "./screen/Main/main.screen";
import { SetTimeScreen } from "./screen/SetTime/setTime.screen";
import { WorkOutScreen } from "./screen/Workout/workout.screen";
import { WorkoutContextProvider } from "./services/workout.context";
import React from "react";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <WorkoutContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="SetTime" component={SetTimeScreen} />
        <Stack.Screen name="Workout" component={WorkOutScreen} />
      </Stack.Navigator>
    </WorkoutContextProvider>
  );
};
