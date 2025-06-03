import GlobeScene from "./GlobeScene.tsx";
import {useEffect} from "react";

const Globe = () => {
  useEffect(() => {
    document.title = "Celestro | Globe";
  }, []);

  return (
    <div className="relatetive w-full h-screen">
      <GlobeScene />
    </div>
  )
}

export default Globe;