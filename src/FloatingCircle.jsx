import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const FloatingCircle = () => {
  const controls = useAnimation();

  const generateRandom = () => ({
    x: Math.random() * 60, // range: -20 to +20
    y: Math.random() * 60,
    transition: {
      duration: 2 + Math.random(), // 2s to 4s
      ease: "easeInOut",
    },
  });

  useEffect(() => {
    const float = () => {
      controls.start(generateRandom()).then(float);
    };
    float();
  }, [controls]);

  return <motion.div className="small-circle" animate={controls} />;
};

export default FloatingCircle;