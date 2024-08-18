import { useState } from "react";
import Index from "./components/Login/Login";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <div>
        <Index />
      </div> */}
    </>
  );
}

export default App;
