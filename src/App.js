import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  const [pageSize, setPageSize] = useState(16);

  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Navbar />
      <Routes>
        <Route
          path="sports"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              pageSize={pageSize}
              key="sports"
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              key="general"
              country="in"
              category="general"
            />
          }
        />
        <Route
          path="entertainment"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="entertainment"
              category="entertainment"
            />
          }
        />
        <Route
          path="general"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="general"
              category="general"
            />
          }
        />
        <Route
          path="health"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="health"
              category="health"
            />
          }
        />
        <Route
          path="science"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="science"
              category="science"
            />
          }
        />
        <Route
          path="technology"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="technology"
              category="technology"
            />
          }
        />
        <Route
          path="business"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              apikey={apikey}
              country="in"
              key="business"
              category="business"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
