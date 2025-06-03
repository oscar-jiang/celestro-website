import earthImage from "..//assets/earth-north-america.png";
import nightSky from "..//assets/night-sky.jpg";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Celestro";
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    }
  }, []);

  return (
    <>
      <header className="w-full bg-white py-4 px-6 flex justify-between items-center font-rubik">
        <h1 className="absolute top-01 left-6 text-3xl font-serif text-black font-rubik">
          Celestro
        </h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row">
          <button
            className="bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-100 transition cursor-pointer text-xs"
            onClick={() => navigate('/globe')}
          >
            Start Simulation
          </button>
          <a
            href="https://github.com/oscar-jiang/celestro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-100 transition cursor-pointer text-xs"
          >
            GitHub
          </a>
        </div>
      </header>
      
      <div className={"relative w-full bg-white py-20"}>
        <h1 className={"text-7xl font-serif text-center font-rubik"}>Explore Beyond</h1>

        <div className={"relative w-full flex justify-center mt-3"}>
          <img src={nightSky} alt={"Night Sky"} className={'w-[80%] mt-10 h-[300px] rounded-4xl relative animate-fadeIn-1200'} />

          <div className={'absolute max-w-[500px] -top-14 animate-fadeIn-yTransform-1200'}>
            <img
              src={earthImage}
              alt={"Earth"}
              style={{clipPath : 'inset(0% 0% 20.8% 0%)'}}
            />

            <h2 className={"absolute left-1/2 transform -translate-x-1/2 top-14 text-5xl text-center font-rubik text-white"}>
              The Earth
            </h2>

            <button
              className={'absolute left-1/2 transform -translate-x-1/2 top-50 bg-gray-800 text-gray-300 opacity-90 rounded-xl w-[150px] h-[45px] font-rubik hover:bg-gray-700 cursor-pointer'}
              onClick={() => navigate('/globe')}
            >
              Start Simulation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
