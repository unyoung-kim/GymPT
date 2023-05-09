import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 100,
  ...props
}) => {
  return (
    <Button style={styles.start} onPress={props.onPress} mode="contained">
      {props.title}
    </Button>
  );
};

const styles = StyleSheet.create({
  start: {
    backgroundColor: "black",
  },
});
