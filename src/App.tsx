import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { initializeAnimations } from "./reducers/animationsReducer";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styles from "./style";
import PrimaryArea from "./components/PrimaryArea";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCircleXmark,
  faArrowRotateRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faBars, faCircleXmark, faArrowRotateRight, faHeart, faCode);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAnimations());
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden font-montserrat text-textoffwhite">
      <Sidebar />
      <div className="flex h-screen flex-col">
        <div className={`${styles.flexCenter} bg-primary`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`flex flex-grow justify-center`}>
          <div className={`${styles.boxWidth}`}>
            <PrimaryArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
