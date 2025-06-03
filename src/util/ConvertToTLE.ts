import type {Satellite} from "../types/Satellite.ts";

// Since the data of the satellites from the database in the form on a JSON obejct
// we have to convert it into TLE format when we are working with satellite.js
// Original data from Celestrak can be retrieved in TLE format or JSON

export function pad(value: number | string, length: number): string {
  return value.toString().padStart(length, "0");
}

export function formatEpochToYYDDD(epoch: string): string {
  const date = new Date(epoch);
  const year = date.getUTCFullYear();
  const startOfYear = Date.UTC(year, 0, 0);
  const diff = date.getTime() - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const yy = year % 100;
  const ddd = pad(dayOfYear, 3);
  const fractionalDay = (
    ((date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds()) / 86400)
  ).toFixed(8).slice(1); // remove leading "0"

  return `${pad(yy, 2)}${ddd}${fractionalDay}`;
}

export function formatBStar(bstar: number): string {
  if (bstar === 0) return ' 00000-0';

  const exponent = Math.floor(Math.log10(Math.abs(bstar)));
  const mantissa = bstar / Math.pow(10, exponent);

  const mantissaStr = (mantissa * 100000).toFixed(0).padStart(5, '0');
  const exponentStr = (exponent >= 0 ? '+' : '-') + Math.abs(exponent).toString();

  return `${mantissaStr}${exponentStr}`;
}

export const convertToTLE = (sat: Satellite):[string, string, string] => {
  const line0 = sat.objectName;

  const line1 = `1 ${sat.noradCatId}U ${sat.objectId.replace("-", "")} ${formatEpochToYYDDD(sat.epoch)} .${pad(sat.meanMotionDot, 8)} ${formatBStar(sat.bstar)} 0 9991`;
  const line2 = `2 ${sat.noradCatId} ${sat.inclination.toFixed(4)} ${sat.raOfAscNode.toFixed(4)} ${sat.eccentricity
    .toFixed(7)
    .substring(2)} ${sat.argOfPericenter.toFixed(4)} ${sat.meanAnomaly.toFixed(4)} ${sat.meanMotion.toFixed(8)}00000`;

  return [line0, line1, line2]
}