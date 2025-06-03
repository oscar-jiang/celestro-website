import { Line } from "@react-three/drei";
import { Vector3, Color } from 'three';

interface OrbitTrailProps {
  positions: Vector3[];
  onClick: () => void;
}

function generateColours(positions: Vector3[], baseColour: string): Color[] {
  const base = new Color(baseColour);
  const colours: Color[] = [];

  for (let i = 0; i < positions.length; i++) {
    const t = i / (positions.length - 1);
    const colour = base.clone();
    colour.multiplyScalar(1 - t);
    colours.push(colour);
  }

  return colours;
}

// https://threejs.org/docs/#api/en/math/Color
// https://drei.docs.pmnd.rs/shapes/line
export const OrbitTrail: React.FC<OrbitTrailProps> = ({ positions, onClick }) => {
  const colours = generateColours(positions, "#ff8a00");

  return (
    <Line
      points={positions}
      vertexColors={colours}
      lineWidth={2}
      onClick={onClick}
    />
  );
}

export default OrbitTrail;