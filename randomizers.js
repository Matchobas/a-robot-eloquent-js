import { roadsGraph } from "./roadsGraph.js";

export function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// This is the simple method, only using random values based on the array size
export function randomRobot(state) {
  return {direction: randomPick(roadsGraph[state.place])};
}