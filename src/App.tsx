import React from "react";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent";
import Sidebar from "./components/LayoutComponent/Sidebar";
import Content from "./components/LayoutComponent/Content";

function App() {
  return (
    <LayoutComponent leftWidth={360}>
      <Sidebar />
      <Content />
    </LayoutComponent>
  );
}

export default App;
