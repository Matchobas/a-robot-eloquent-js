import { runRobot } from './index.js';
import { VillageState } from './VillageState.js';

export function compareRobots(robot1, memory1, robot2, memory2) {
  let robotTurns1 = 0;
  let robotTurns2 = 0;
  
  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();

    runRobot
    robotTurns1 += runRobot(task, robot1, memory1);
    robotTurns2 += runRobot(task, robot2, memory2);
  }

  console.log(`Robot 1 finished in ${robotTurns1 / 100} turns on average`);
  console.log(`Robot 2 finished in ${robotTurns2 / 100} turns on average`);
}