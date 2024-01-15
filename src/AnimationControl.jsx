import { motion ,useAnimationControls } from "framer-motion";

const AnimationControl = () => {
  const control=useAnimationControls();
  const handleClick=() => {
      control.start("flip")
  }
  return (
    <div style={{
      marginTop: '-30px',
      display: "grid",
      placeContent: "center",
      height: "100vh",
      gap: "0.9rem"
    }}>

      <motion.button
      onClick={handleClick}
        className="example-button">
        Flip it!
      </motion.button>

      <motion.div
        style={{
          height: "150px",
          width: "150px",
          backgroundColor: "black"
        }}
        variants={{
        initial:{
          rotate: '0deg',
        },
        flip:{
          rotate: '360deg',
        }

        }}
        initial='initial'      
        animate={control}
      >
      </motion.div>
    </div>
  );
};

export default AnimationControl;