import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, TaskList } from "./pages";
import { Error, Edit, Create } from "./components";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <TaskList />, errorElement: <Error /> },
        { path: "/create", element: <Create /> },
        { path: "/edit/:id", element: <Edit /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
