import { VillageState } from './VillageState.js';

const villageState = new VillageState('Post Office', [
  {place: "Post Office", address: "Alice's House"},
  {place: "Alice's House", address: "Shop"},
  {place: "Shop", address: "Town Hall"},
  {place: "Post Office", address: "Farm"},
  {place: "Farm", address: "Alice's House"},
]);

let next = villageState.move("Alice's House");
console.log(next.place);
console.log(next.parcels);

next = next.move("Bob's House");
console.log(next.place);
console.log(next.parcels);

next = next.move("Town Hall");
console.log(next.place);
console.log(next.parcels);

next = next.move("Shop");
console.log(next.place);
console.log(next.parcels);

next = next.move("Town Hall");
console.log(next.place);
console.log(next.parcels);

next = next.move("Shop");
console.log(next.place);
console.log(next.parcels);

next = next.move("Marketplace");
console.log(next.place);
console.log(next.parcels);

next = next.move("Farm");
console.log(next.place);
console.log(next.parcels);

next = next.move("Marketplace");
console.log(next.place);
console.log(next.parcels);

next = next.move("Post Office");
console.log(next.place);
console.log(next.parcels);

next = next.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
