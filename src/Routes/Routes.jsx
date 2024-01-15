import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Main/Main";
import Gesture from "../Gesture";
import AnimationControl from "../AnimationControl";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "k",
        element: <App></App>,
      },
      {
        path: "/",
        element: <Gesture></Gesture>,
      },
      {
        path: "/",
        element: <AnimationControl></AnimationControl>,
      },
    ],
  }
]);
export default router;

