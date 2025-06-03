import DarkEarthTexture from '../assets/dark-earth.jpg';
import BlueMarbleTexture from '../assets/blue-marble.jpg';
import PlainEarthTexture from '../assets/earth-spec.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// https://threejs.org/docs/#api/en/geometries/SphereGeometry
// https://threejs.org/docs/#api/en/materials/MeshStandardMaterial
export const Earth = () => {
  // const map = useLoader(TextureLoader, PlainEarthTexture);
  const map = useLoader(TextureLoader, BlueMarbleTexture);
  // const map = useLoader(TextureLoader, DarkEarthTexture);

  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]}/>
      <meshStandardMaterial map={map} emissiveIntensity={5} fog={true} roughness={0.81} metalness={0.5} />
    </mesh>
  );
}

export default Earth;

// 3C65BE