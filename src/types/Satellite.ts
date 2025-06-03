export interface Satellite {
  id: number;
  objectName: string;
  objectId: string;
  epoch: string;
  meanMotion: number;
  eccentricity: number;
  inclination: number;
  raOfAscNode: number;
  argOfPericenter: number;
  meanAnomaly: number;
  ephemerisType: number;
  classificationType: string;
  noradCatId: number;
  elementSetNo: number;
  revAtEpoch: number;
  bstar: number;
  meanMotionDot: number;
  meanMotionDdot: number;
  fetchedAt: string;
  classification: string;
}