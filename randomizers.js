import { roadsGraph } from "./roadsGraph.js";

export function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

export function randomRobot(state) {
  return {direction: randomPick(roadsGraph[state.place])};
}