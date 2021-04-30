import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Window from "../components/Window";

const videoConstraints = {
  facingMode: "user"
};

const FaceTimeContent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [click, setClick] = useState(false);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  if (click)
    return (
      <div
        id="container"
        className="nightwind-prevent nightwind-prevent-block border-8 bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center"
      >
        {imgSrc && (
          <img className="max-h-60 md:max-h-96" src={imgSrc} alt="yourimage" />
        )}
        <button
          className="mx-auto outline-none focus:outline-none items-center justify-center bg-white h-6 w-20 border border-black border-opacity-50 rounded-full"
          onClick={() => {
            setClick(false);
          }}
        >
          <b>Retake</b>
        </button>
      </div>
    );
  else
    return (
      <div
        id="container"
        className="nightwind-prevent nightwind-prevent-block bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center"
      >
        <Webcam
          className="border-8 max-h-60 md:max-h-96"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button
          className="mx-auto outline-none focus:outline-none items-center justify-center bg-white h-12 w-12 border border-black border-opacity-50 rounded-full"
          onClick={() => {
            setClick(true);
            capture();
          }}
        />
      </div>
    );
};

export default function FaceTime({ show, setShow, active, z }) {
  const [faceTimeMax, setFaceTimeMax] = useState(false);
  return (
    <Window
      title="FaceTime"
      show={show}
      setShow={setShow}
      max={faceTimeMax}
      setMax={setFaceTimeMax}
      active={active}
      z={z}
      height={600}
    >
      <FaceTimeContent />
    </Window>
  );
}
