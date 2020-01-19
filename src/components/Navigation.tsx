import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import AccTransForm from "./AccTransForm";
import TransReport from "./TransReport";
import { TxAccount } from "./typesBank";

const axios = require("axios");

const POST_URL = "http://localhost:3001/transactions";

const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 0.7em;
  justify-content: space-around;
`;

const Navigation = styled.nav`
  grid-area: box1;
  cursor: pointer;
  color: #fff;
  font-size: 2em;
  border-radius: 4px;
  border: 1px solid #bbb;
  transition: all 0.3s linear;

  background: #7abcff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #7abcff),
    color-stop(44%, #60abf8),
    color-stop(100%, #4096ee)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* IE10+ */
  background: linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* W3C */

  position: fixed;
  top: 0;
  width: 100%;
`;

export interface NavProps {}

const Nav: React.SFC = () => {
  const submit = async (values: any) => {
    let res: TxAccount = values;
    res.amount = parseInt(res.amount, 10);
    /* let disRes = JSON.stringify(res, null, 4);
    window.alert(disRes);
    console.log("form values", disRes); */
    try {
      const response = await axios.post(POST_URL, res);
      console.log(response);
      if (response.status === 200) {
        alert("success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getInitialValues = () => {
    return {
      account: "accA",
      currency: "SGD",
      action: "credit",
      amount: 0,
      desc: "note.."
    };
  };

  return (
    <Router>
      <Navigation>
        <NavList>
          <li>
            <Link to="/">Account Transfer</Link>
          </li>
          <li>
            <Link to="/report">Transactions Reports</Link>
          </li>
        </NavList>
      </Navigation>
      <Switch>
        <Route path="/report">
          <TransReport />
        </Route>
        <Route path="/">
          <AccTransForm onSubmit={submit} initialValues={getInitialValues()} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
