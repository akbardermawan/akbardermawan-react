import { useLocation } from "react-router-dom";
import LanyardCanvas from "../Lanyard/LanyardCanvas";
import EarthCanvas from "../canvas/Earth";
import CanvasCursor from "../CanvasCursor";

export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Cursor OFF saat masuk area 3D */}
      {pathname !== "/earth" && pathname !== "/lanyard" && <CanvasCursor />}

      {pathname === "/lanyard" && <LanyardCanvas />}
      {pathname === "/earth" && <EarthCanvas />}
    </>
  );
}
