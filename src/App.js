import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import MemoExample from "./containers/MemoExample";
import UseMemoExample from "./containers/UseMemoExample";
import UseCallBackExample from "./containers/UseCallBackExample";
import ZeroOptimizationExample from "./containers/ZeroOptimizationExample";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="memo" element={<MemoExample />} />
      <Route path="usememo" element={<UseMemoExample />} />
      <Route path="usecallback" element={<UseCallBackExample />} />
      <Route path="zero" element={<ZeroOptimizationExample />} />
    </Routes>
  );
}

export default App;
