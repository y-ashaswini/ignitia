import { useCallback, useContext, useRef, useState } from "react";
import { userDataContext } from "../App";
import NotSignedin from "../Authentication/NotSignedin";
import Webcam from "react-webcam";

export default function Emergency() {
  const { u_email } = useContext(userDataContext);
  const [isaudio, setIsaudio] = useState(false);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const WebcamStreamCapture = () => {
    const handleStartCaptureClick = useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );

    const handleStopCaptureClick = useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);
    return (
      <>
        <Webcam audio={false} ref={webcamRef} />
        {capturing ? (
          <button
            className="border-2 border-r-4 border-b-4 border-slate-600 px-2 py-2 rounded-md"
            onClick={handleStopCaptureClick}
          >
            Stop Capture
          </button>
        ) : (
          <button
            className="border-2 border-r-4 border-b-4 border-slate-600 px-2 py-2 rounded-md"
            onClick={handleStartCaptureClick}
          >
            Start Capture
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button
            className="border-2 border-r-4 border-b-4 border-slate-600 px-2 py-2 rounded-md"
            onClick={handleDownload}
          >
            Download
          </button>
        )}

        <div className="border-2 border-r-4 border-b-4 border-slate-600 px-2 py-2 rounded-md">
          Recorded: {JSON.stringify(recordedChunks)}
        </div>
      </>
    );
  };

  return (
    <div className="w-full h-full bg-slate-100 rounded-3xl p-5 flex flex-col border-r-8 border-b-8 border-2 border-slate-800">
      {!u_email || (u_email && u_email.trim()) === "" ? (
        <NotSignedin />
      ) : (
        <span className="text-slate-600 flex flex-col gap-2">
          <div className="text-2xl">SOS and Emergency Services</div>
          <WebcamStreamCapture />
        </span>
      )}
    </div>
  );
}
