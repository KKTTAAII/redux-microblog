import React from "react";
import "../css/App.css";
import { Container } from "react-bootstrap";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <Container>
      <div className="App">
        <AllRoutes />
      </div>
    </Container>
  );
}

export default App;
