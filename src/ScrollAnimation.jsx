import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const background=useTransform(scrollYProgress,[0,0.12,1],["rgb(204, 0, 204)","rgb(51,51,51)","rgb(255,192,203)"])
  return (
    <div>

      <motion.div
        style={{
          // scaleX:scrollYProgress,
          scaleX,
          transformOrigin: "left",
          // backgroundColor: 'blue',
          background,
          position: "sticky",
          top: "0",
          width: "100%",
          height: '40px'
        }}

      />

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1.2rem"
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam quibusdam. Nam maiores, iste incidunt qui rerum minima possimus odit provident est fuga rem dolor itaque minus, id ea aliquid? Consectetur facere quibusdam fuga sit. Ratione laudantium voluptatibus perferendis magni quisquam consequuntur, ipsum nesciunt consectetur eveniet ullam vitae quidem alias illum aut animi, ab sed cumque ea corporis a itaque soluta molestiae? Quidem sint voluptatum iusto natus cum fugiat, obcaecati, commodi debitis laboriosam voluptate tempore necessitatibus exercitationem asperiores et magni nihil reiciendis, eveniet incidunt alias ratione? Deleniti iure excepturi totam voluptas. Voluptatem consectetur voluptates iure necessitatibus ex maxime quis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam quibusdam. Nam maiores, iste incidunt qui rerum minima possimus odit provident est fuga rem dolor itaque minus, id ea aliquid? Consectetur facere quibusdam fuga sit. Ratione laudantium voluptatibus perferendis magni quisquam consequuntur, ipsum nesciunt consectetur eveniet ullam vitae quidem alias illum aut animi, ab sed cumque ea corporis a itaque soluta molestiae? Quidem sint voluptatum iusto natus cum fugiat, obcaecati, commodi debitis laboriosam voluptate tempore necessitatibus exercitationem asperiores et magni nihil reiciendis, eveniet incidunt alias ratione? Deleniti iure excepturi totam voluptas. Voluptatem consectetur voluptates iure necessitatibus ex maxime quis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam quibusdam. Nam maiores, iste incidunt qui rerum minima possimus odit provident est fuga rem dolor itaque minus, id ea aliquid? Consectetur facere quibusdam fuga sit. Ratione laudantium voluptatibus perferendis magni quisquam consequuntur, ipsum nesciunt consectetur eveniet ullam vitae quidem alias illum aut animi, ab sed cumque ea corporis a itaque soluta molestiae? Quidem sint voluptatum iusto natus cum fugiat, obcaecati, commodi debitis laboriosam voluptate tempore necessitatibus exercitationem asperiores et magni nihil reiciendis, eveniet incidunt alias ratione? Deleniti iure excepturi totam voluptas. Voluptatem consectetur voluptates iure necessitatibus ex maxime quis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam quibusdam. Nam maiores, iste incidunt qui rerum minima possimus odit provident est fuga rem dolor itaque minus, id ea aliquid? Consectetur facere quibusdam fuga sit. Ratione laudantium voluptatibus perferendis magni quisquam consequuntur, ipsum nesciunt consectetur eveniet ullam vitae quidem alias illum aut animi, ab sed cumque ea corporis a itaque soluta molestiae? Quidem sint voluptatum iusto natus cum fugiat, obcaecati, commodi debitis laboriosam voluptate tempore necessitatibus exercitationem asperiores et magni nihil reiciendis, eveniet incidunt alias ratione? Deleniti iure excepturi totam voluptas. Voluptatem consectetur voluptates iure necessitatibus ex maxime quis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam quibusdam. Nam maiores, iste incidunt qui rerum minima possimus odit provident est fuga rem dolor itaque minus, id ea aliquid? Consectetur facere quibusdam fuga sit. Ratione laudantium voluptatibus perferendis magni quisquam consequuntur, ipsum nesciunt consectetur eveniet ullam vitae quidem alias illum aut animi, ab sed cumque ea corporis a itaque soluta molestiae? Quidem sint voluptatum iusto natus cum fugiat, obcaecati, commodi debitis laboriosam voluptate tempore necessitatibus exercitationem asperiores et magni nihil reiciendis, eveniet incidunt alias ratione? Deleniti iure excepturi totam voluptas. Voluptatem consectetur voluptates iure necessitatibus ex maxime quis?
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;