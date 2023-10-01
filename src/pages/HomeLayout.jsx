import { Link, Outlet } from "react-router-dom";
import { Navbar, Footer, Create } from "../components";
import TaskList from "./TaskList";
function HomeLayout() {
  return (
    <div className="flex-1 align-elements w-[80vw] min-h-[95vh] my-8 bg-cyan-200 border-solid border">
      {" "}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default HomeLayout;
