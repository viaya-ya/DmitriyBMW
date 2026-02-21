import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import myVideo from "../assets/IMG_0574.MOV";

const words = ["Подходите за наш столик",
    "Вы привлекательны",
    "Я чертовски привлекателен",
    "Чего зря время терять",
    "Жду за нашим столиком !!!"]

export default function Text() {
    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    const next = () => {
        if (index < words.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            setFinished(true);
        }
    };

    useEffect(() => {
        if (finished) return;

        const interval = setInterval(next, 3000);
        return () => clearInterval(interval);
    }, [index, finished]);

    const restart = () => {
        setIndex(0);
        setFinished(false);
    };

    return (
        <div
            onClick={() => !finished && next()}
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                cursor: finished ? "default" : "pointer",
                background: "linear-gradient(135deg, #ff2a8c 0%, #ff5bbd 50%, #ff91d1 100%)",
                color: "white",
                padding: "20px",
            }}
        >
            {/* Светящийся круг на фоне */}
            <motion.div
                animate={{scale: [1, 1.05, 1]}}
                transition={{duration: 6, repeat: Infinity}}
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)",
                    filter: "blur(100px)",
                }}
            />

            {/* Прогресс-бар */}
            {!finished && (
                <motion.div
                    key={index}
                    initial={{width: "0%"}}
                    animate={{width: "100%"}}
                    transition={{duration: 3, ease: "linear"}}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 3,
                        background: "white",
                    }}
                />
            )}

            {/* Текст */}
            <AnimatePresence mode="wait">
                {!finished && (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 60, scale: 0.9, filter: "blur(15px)"}}
                        animate={{opacity: 1, y: 0, scale: 1, filter: "blur(0px)"}}
                        exit={{opacity: 0, y: -60, scale: 0.9, filter: "blur(15px)"}}
                        transition={{type: "spring", stiffness: 120, damping: 20}}
                        style={{
                            position: "relative",
                            fontSize: "clamp(28px, 6vw, 64px)",
                            fontWeight: 700,
                            textAlign: "center",
                            maxWidth: "80%",
                            zIndex: 1,
                            color: "#ffd6eb",
                        }}
                    >
                        {words[index]}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Кнопка "Начать заново" */}
            {finished && (
                <motion.button
                    onClick={restart}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        padding: "12px",
                        borderRadius: "50%",
                        border: "none",
                        background: "rgba(255,255,255,0.2)",
                        cursor: "pointer",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "15px",
                        width: "60px",
                        height: "60px",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                    >
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.1-.9 2-2 2h-1v2h1c2.21 0 4-1.79 4-4 0-3.31-2.69-6-6-6zm-6 6c0-1.1.9-2 2-2h1V6H8c-2.21 0-4 1.79-4 4 0 3.31 2.69 6 6 6v3l4-4-4-4v3c-3.31 0-6-2.69-6-6z"/>
                    </svg>
                </motion.button>
            )}

            {/* Видео " */}
            { finished && (
                <video
                    src={myVideo}
                    style={{
                        position: "relative",
                        width: "60vw",
                        height: "70vh",
                        borderRadius: "12px",
                        objectFit: "cover",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                    autoPlay
                    loop
                    controls
                />
            )}
        </div>
    );
}

// IMG_0574.MOV