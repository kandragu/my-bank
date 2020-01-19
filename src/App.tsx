import React from "react";
import "./App.css";
import Nav from "./components/Navigation";
import AccTransForm from "./components/AccTransForm";
import styled from "styled-components";
import TransReport from "./components/TransReport";

const Container = styled.div`
  display: grid;
`;

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Container></Container>
    </>
  );
};

export default App;
