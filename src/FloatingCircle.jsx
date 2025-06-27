import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const FloatingCircle = ({ icon:Icon, link }) => {
  const controls = useAnimation();

  const generateRandom = () => ({
    x: Math.random() * 40, // range: -20 to +20
    y: Math.random() * 40,
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

  return (
  <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      animate={controls}
      className="small-circle"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1.2rem" }}
    >
      <Icon />
    </motion.a>
  )
};

export default FloatingCircle;