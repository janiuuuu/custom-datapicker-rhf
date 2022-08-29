import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
