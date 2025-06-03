import * as satellite from "satellite.js";
import {Vector3} from "three";

// since satellite does the calculations in km and in three.js the radius of my earth is around 2 units
// we have to add a conversion factor, that's why the orbits are not rendering in frame because of the
// actually distances in that we encounter irl
const EARTH_RADIUS_KM: number = 6371;
const EARTH_RADIUS_UNITS: number = 2;
const exaggerationFactor: number = 0.12;

const conversionFactor: number = (EARTH_RADIUS_UNITS / EARTH_RADIUS_KM) * exaggerationFactor;

// Function that takes in TLE information of a satellite and loops to project the orbit of the satellite over 90 minutes in Vector3
export function calculateOrbitTrail(tleLine1: string, tleLine2: string): Vector3[] {
  const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
  const positions: Vector3[] = [];

  const date = new Date();
  // 360 minutes = 6 hours
  for (let i = 0; i < 360; i++) {
    const time = new Date(date.getTime() + i * 60 * 1000);
    const positionAndVelocity = satellite.propagate(satrec, time);

    if (positionAndVelocity && positionAndVelocity.position) {
      const gst = satellite.gstime(time);
      const positionEci = satellite.eciToEcf(positionAndVelocity.position, gst);

      positions.push(new Vector3(positionEci.x * conversionFactor, positionEci.y * conversionFactor, positionEci.z * conversionFactor));
    }
  }

  return positions;
}