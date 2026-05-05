import { useRef, useEffect, useState } from "react";
import ".././index.css";

const RefDemo = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  const imgRef = useRef(null);

  const zoomIn = () => {
    imgRef.current.style.transform = "scale(1.3)";
  };

  const zoomOut = () => {
    imgRef.current.style.transform = "scale(1)";
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videoRef = useRef(null);
  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current.focus();
  const handleClear = () => (inputRef.current.value = "");

  return (
    <div className="container">
      {/* Video Controls */}
      <div className="card">
        <h2>🎥 Video Control</h2>
        <video ref={videoRef} width="300" className="video" controls={false}>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        <div className="btn-group">
          <button onClick={playVideo}>Play</button>
          <button onClick={pauseVideo}>Pause</button>
        </div>
      </div>

      {/* Input Control */}
      <div className="card">
        <h2>⌨️ Input Control</h2>
        <input ref={inputRef} type="text" placeholder="Enter your name" />
        <div className="btn-group">
          <button onClick={handleFocus}>Focus</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      {/* Scroll Section */}
      <div className="card">
        <h2>📜 Scroll to Section</h2>
        <button onClick={scrollToSection}>Go to Section</button>
        <div className="scroll-space">
          <p>Scroll down...</p>
        </div>
        <div ref={sectionRef} className="target">
          <h2>Target Section</h2>
        </div>
      </div>

      {/* Image Zoom */}
      <div className="card">
        <h2>🖼 Image Zoom</h2>
        <img
          ref={imgRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&s"
          alt="kitten"
          className="zoom-img"
        />
        <div className="btn-group">
          <button onClick={zoomIn}>Zoom In</button>
          <button onClick={zoomOut}>Zoom Out</button>
        </div>
      </div>

      {/* Box + Outside Click */}
      <div className="card">
        <h2>📦 Click Outside</h2>
        <button onClick={() => setOpen(!open)}>Toggle Box</button>
        {open && (
          <div ref={boxRef} className="outside-box">
            Click outside to close
          </div>
        )}
      </div>
    </div>
  );
};

export default RefDemo;
