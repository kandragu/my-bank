import React from "react";
import "./App.css";
import Nav from "./components/Navigation";
import AccTransForm from "./components/AccTransForm";
import styled from "styled-components";
import TransReport from "./components/TransReport";

const axios = require("axios");

const POST_URL = "http://localhost:3001/transactions";
const Container = styled.div`
  display: grid;
`;
export interface TxAccount {
  account: string;
  currency: string;
  action: string;
  amount: any;
  desc: string;
}

const App: React.FC = () => {
  const submit = async (values: any) => {
    let res: TxAccount = values;
    res.amount = parseInt(res.amount, 10);
    /* let disRes = JSON.stringify(res, null, 4);
    window.alert(disRes);
    console.log("form values", disRes); */
    try {
      const response = await axios.post(POST_URL, res);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
        <TransReport />
      </Container>
    </>
  );
};

export default App;
