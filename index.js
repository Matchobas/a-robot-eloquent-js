import { VillageState } from './VillageState.js';

const villageState = new VillageState('Post Office', [{place: "Post Office", address: "Alice's House"}]);

let next = villageState.move("Alice's House");
console.log(next.place);