import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navigation";
import AccTransForm from "./components/AccTransForm";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;

const App: React.FC = () => {
  const submit = (values: any) => {
    window.alert(JSON.stringify(values, null, 4));
    console.log("form values", JSON.stringify(values, null, 4));
  };

  const getInitalValues = () => {
    return {
      account: "accA",
      currency: "SGD",
      action: "credit",
      amount: 0,
      desc: "note.."
    };
  };

  return (
    <>
      <Nav />
      <Container>
        <AccTransForm onSubmit={submit} initialValues={getInitalValues()} />
      </Container>
    </>
  );
};

export default App;
