import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home.jsx";
import ChessApp from "./ChessGame/ChessApp.jsx";
import Navbar from "./Navbar.jsx";
// import Login from "./accCreate/Login.jsx";
import LoginDisplay from "./accCreate/LoginDisplay.jsx";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import userReducer from "./reducer.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="ChessApp" element={<ChessApp />} />
      <Route path="loginDisplay" element={<LoginDisplay />} />
    </Route>
  )
);

// const store = createStore(userReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
