import { useRef, useState } from "react";
import myVideo from "../assets/dimas.mp4";

export default function VideoPlayer() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false; // включаем звук
            setIsMuted(false);              // скрываем кнопку
        }
    };

    return (
        <div style={{ position: "relative" }}>
            <video
                ref={videoRef}
                src={myVideo}
                autoPlay
                loop
                muted={isMuted}
                style={{
                    width: "60vw",
                    height: "70vh",
                    borderRadius: "12px",
                    objectFit: "cover",
                }}
                controls
            />

            {/* Кнопка появляется только если звук выключен */}
            {isMuted && (
                <button
                    onClick={toggleMute}
                    style={{
                        position: "absolute",
                        width: "150px",
                        bottom: 50,
                        right: "50%",
                        transform: "translateX(50%)",
                        padding: "12px 18px",
                        borderRadius: "30px",
                        border: "none",
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: "pointer",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease",
                    }}
                >
                    Включить звук
                </button>
            )}
        </div>
    );
}