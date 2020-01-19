import * as React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const AccountForm = styled.form`
  margin: 100px;
`;
const FieldItem = styled.div`
  display: flex;
  font-weight: bold;
  width: 250px;
  justify-content: space-between;
`;

const FieldLabel = styled.label`
  margin-right: 10px;
`;

export interface TransferProps {
  handleSubmit: any;
  pristine: any;
  reset: any;
  submitting: any;
}

const normalizeAmount = (value: any, previousValue: any) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};

const AccTransForm: React.FC<TransferProps> = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <AccountForm onSubmit={handleSubmit}>
      <FieldItem>
        <FieldLabel>Select Account</FieldLabel>
        <div>
          <Field name="account" component="select">
            <option />
            <option value="accA">Account A</option>
            <option value="accB">Account B</option>
          </Field>
        </div>
      </FieldItem>

      <FieldItem>
        <FieldLabel>Currency</FieldLabel>
        <div>
          <Field name="currency" component="select">
            <option />
            <option value="SGD">SGD</option>
            <option value="USD">USD</option>
          </Field>
        </div>
      </FieldItem>
      <FieldItem>
        <FieldLabel>Action</FieldLabel>
        <div>
          <Field name="action" component="select">
            <option />
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </Field>
        </div>
      </FieldItem>
      <FieldItem>
        <FieldLabel>Amount</FieldLabel>
        <div>
          <Field
            name="amount"
            component="input"
            type="text"
            placeholder="Amount"
            normalize={normalizeAmount}
          />
        </div>
      </FieldItem>

      <FieldItem>
        <FieldLabel>Description</FieldLabel>
        <div>
          <Field name="desc" component="textarea" />
        </div>
      </FieldItem>
      <FieldItem>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </FieldItem>
    </AccountForm>
  );
};

export default reduxForm({
  form: "AccTransForm" // a unique identifier for this form
})(AccTransForm);
