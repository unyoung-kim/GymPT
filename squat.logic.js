import React from "react";

// addCount should be incrementing the squat count by 1 everytime
// Need to use while loop
export const SquatLogic = ({ poses, addCount }) => {
  let status = "down";
  const knee_y = poses[0].keypoints[14].y;
  const hip_y = poses[0].keypoints[12].y;

  if (knee_y > hip_y) {
    status = "down";
  } else if (knee_y < hip_y && status == "down") {
    status = "up";
    addCount();
  }
};
