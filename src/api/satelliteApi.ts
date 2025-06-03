import axios from 'axios';
import type {Satellite} from '../types/Satellite';

const API_BASE_URL: any = import.meta.env.VITE_API_BASE_URL;

// https://www.youtube.com/watch?v=bMRrSqWFKqM - API Tutorial - Fetch Data with Axios - (Example in React)
export const getSatellites = async (): Promise<Satellite[]> => {
  try {
    const response = await axios.get<Satellite[]>(`${API_BASE_URL}/satellites`);
    return response.data;
  } catch (error) {
    console.log("An error has occured: " + error);
    throw (error);
  }
}

export const getSatelliteByObjectId = async (objectId: string): Promise<Satellite> => {
  try {
    const response = await axios.get<Satellite>(`${API_BASE_URL}/satellites/object-id/${objectId}`);
    return response.data;
  } catch (error) {
    console.log("An error has occured: " + error);
    throw (error);
  }
}