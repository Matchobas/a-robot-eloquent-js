import { randomRobot } from './randomizers.js';
import { routeRobot } from './routeRobot.js';
import { VillageState } from './VillageState.js';

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    // console.log(`Moved to ${action.direction}`);
  }
}

runRobot(VillageState.random(), randomRobot);
runRobot(VillageState.random(), routeRobot, []);