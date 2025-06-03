interface GlobeSceneInformationProps {
  visible: boolean;
  onClose: () => void;
}

export const GlobeSceneInformation = ({visible, onClose}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black backdrop-opacity-[.70] text-white p-4 font-rubik ">
      <div className="bg-gray-900 p-6 rounded-md w-[350px] max-h-[450px] h-[80%] shadow-xl opacity-100 animate-fadeIn-1200">
        <h2 className="text-xl font-bold mb-4">Welcome to Celestro 🌌</h2>
        <p className="text-sm">
          Explore the scene by rotating, zooming, and toggling satellite orbits. Click on an orbit trail to view detailed satellite information. If the satellite table doesn't appear in the options panel, the data may still be loading. You can revisit this message anytime from the options menu. <br />

          <span className="font-semibold text-sm">Satellite Table Notes:</span><br />
          • <strong>Satellite Name</strong>: The official object name. <br />
          • <strong>NORAD</strong>: Unique satellite ID from the NORAD catalog. <br />
          • <strong>Inclination</strong>: Angle between the orbit and Earth’s equator (°). <br />
          • <strong>Mean Motion</strong>: Revolutions per day. <br />
          • <strong>Eccentricity</strong>: 0 = circular, closer to 1 = elliptical orbit.
        </p>

        <button
          className={"bg-red-500 m-2 rounded-3xl p-2 hover:bg-red-400 cursor-pointer"}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GlobeSceneInformation;
