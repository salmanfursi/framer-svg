import { MotionConfig, motion } from "framer-motion";
const Gesture = () => {
  return (
    <div style={{
      marginTop: '-30px',
      display: "grid",
      placeContent: "center",
      height: "100vh",
      gap: "0.9rem"
    }}>

      <MotionConfig
      transition={{
        duration: 0.125,
        ease: 'easeInOut'
      }}
      >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{scale: 1 ,rotate: "10deg" }}
        className="example-button">
        click me!
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 1.10 ,rotate: "-10deg" }}
        style={{backgroundColor:"red"}}
        className="example-button">
        click me!
      </motion.button>
      </MotionConfig>


    </div>
  );
};

export default Gesture;