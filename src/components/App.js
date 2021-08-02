import React from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyles";
import "../networking";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
