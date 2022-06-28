import { findRoute } from "./findRoute.js";
import { roadsGraph } from "./roadsGraph.js";

export function goalOrientedRobot({ place, parcels }, route) {
  if (route.length === 0) {
    let parcel = parcels[0];

    if (parcel.place != place) {
      route = findRoute(roadsGraph, place, parcel.place);
    } else {
      route = findRoute(roadsGraph, place, parcel.address);
    }
  }

  return {direction: route[0], memory: route.slice(1)};
}