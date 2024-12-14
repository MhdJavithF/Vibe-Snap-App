import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { IoCamera } from "react-icons/io5";
import { useState, useRef } from "react";
import { MdDelete } from "react-icons/md";
import '../styles/newpost.css';

const CreatePostPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();

  const previousPage = location.state?.from || '/feed';

  const resizeImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 310;
        canvas.height = 248;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setSelectedFile(canvas.toDataURL("image/png"));
      };
    };
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      resizeImage(file);
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedFile(url);
    }
  };

  const handleCameraOpen = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    setCameraStream(stream);
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  return (
    <div className='new-post-wrapper pages'>
      <span className="back">
        <Link to={previousPage}>
          <FaArrowLeft />
        </Link>
        <span>New Post</span>
      </span>

      <div className="rect">
        {selectedFile ? (
          <div>
            {selectedFile.startsWith("data:image") ? (
              <img
                src={selectedFile}
                alt="Preview"
                style={{ width: "310px", height: "248px" }} />
            ) : (
              <video
                src={selectedFile}
                controls
                autoPlay
                style={{ width: "310px", height: "248px" }} />
            )}
            <div className="delete-icon" onClick={() => setSelectedFile(null)}>
              <MdDelete />
            </div>
          </div>
        ) : (
          !cameraStream && <p>What's on your mind?</p>
        )}
        {cameraStream && (
          <video
            ref={(videoElement) => {
              if (videoElement && cameraStream) {
                videoElement.srcObject = cameraStream;
              }
            }}
            autoPlay
            style={{ width: "310px", height: "248px" }} />
        )}
      </div>

      <div className="options">
        <label className="pic icon">
          <IoMdPhotos /> <span>Photos</span>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </label>
        <label className="vid icon">
          <BiSolidVideos /> <span>Videos</span>
          <input
            type="file"
            accept="video/*"
            style={{ display: "none" }}
            onChange={handleVideoUpload}
          />
        </label>
        <div className="cam icon" onClick={handleCameraOpen}>
          <IoCamera /> <span>Camera</span>
        </div>
        {cameraStream && <button onClick={stopCamera}>Stop Camera</button>}
      </div>

      <div>
        <Link to={`/profile-page`}>
          <button className="create">Create</button>
        </Link>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CreatePostPage