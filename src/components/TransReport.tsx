import * as React from "react";
import styled from "styled-components";
import { TxAccount } from "./typesBank";
const axios = require("axios");
const GET_URL =
  "http://localhost:3001/transactions?filter[offset]=0&filter[limit]=100&filter[skip]=0";

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(75px, auto));
  grid-template-rows: repeat(3, minmax(auto, 75px));
  overflow: auto;
  grid-gap: 2px;
  max-height: 100%;
  max-width: 100%;
  margin-top: 100px;
`;

const TableHeader = styled.div`
  padding-top: 10px;
  text-align: center;
  background-color: rgb(203, 229, 255);
`;

const TableData = styled.div`
  padding: 10px;
  background-color: rgb(223, 203, 255);
`;

const getTrans = async () => {
  try {
    const response = await axios.get(GET_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

class TransReport extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const res = await getTrans();
    this.setState(
      {
        data: [...res]
      },
      () => console.log(this.state.data)
    );
  }
  render() {
    return (
      <TableGrid>
        <TableHeader>Account</TableHeader>
        <TableHeader>Currency</TableHeader>
        <TableHeader>Action</TableHeader>
        <TableHeader>Amount</TableHeader>
        {this.state.data.map((value: TxAccount) => {
          console.log("value", value.account);
          return (
            <>
              <TableData>{value.account}</TableData>
              <TableData>{value.currency}</TableData>
              <TableData>{value.action}</TableData>
              <TableData>{value.amount}</TableData>
            </>
          );
        })}
      </TableGrid>
    );
  }
}

export default TransReport;
