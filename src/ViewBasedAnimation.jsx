import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimation = () => {
  const ref = useRef(null)
  const isInview = useInView(ref,{once:true})
  useEffect(()=>{
    console.log('isinview -->',isInview);
  },[isInview])
  return (
    <>
      <div style={{ height: '150vh' }}></div>
      <motion.div
        style={{
          height: '100vh',
          backgroundColor: 'black'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: isInview ? "blue" : 'red',
          transition:"1s background"
        }}
      />

    </>
  );
};

export default ViewBasedAnimation;