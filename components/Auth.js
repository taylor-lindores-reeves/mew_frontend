import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { AnimatedFormStyles } from "../components/styles/FormStyles";
import Router from "next/router";
import gql from "graphql-tag";
import Error from "../components/Error";
import Success from "../components/Success";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $repeatPassword: String!
  ) {
    signup(
      email: $email
      password: $password
      repeatPassword: $repeatPassword
    ) {
      id
      email
    }
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const Form = ({
  option,
  email,
  password,
  repeatPassword,
  successMessage,
  setEmail,
  setPassword,
  setRepeatPassword,
  setSuccessMessage
}) => {
  return (
    <Mutation
      mutation={
        option === 1
          ? SIGNIN_MUTATION
          : option === 2
          ? SIGNUP_MUTATION
          : RESET_PASSWORD_MUTATION
      }
    >
      {(sign, { error, loading, called }) => (
        <form
          className="account-form"
          method="POST"
          onSubmit={async e => {
            e.preventDefault();
            const res = await sign({
              variables: { email, password, repeatPassword }
            });

            if (option === 1) {
              Router.push({
                pathname: "/app"
              });
            } else if (option === 2) {
              Router.push({
                pathname: "/app"
              });
            } else {
              setSuccessMessage(res.data.requestReset.message);
            }
          }}
        >
          <div
            className={
              "account-form-fields " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <input
              id="email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required={option === 1 || option === 2 ? true : false}
              disabled={option === 3 ? true : false}
            />
            <input
              id="repeat-password"
              name="repeat-password"
              type="password"
              placeholder="Repeat password"
              onChange={e => setRepeatPassword(e.target.value)}
              required={option === 2 ? true : false}
              disabled={option === 1 || option === 3 ? true : false}
            />
          </div>
          <button
            disabled={loading}
            aria-busy={loading}
            className="btn-submit-form"
            type="submit"
          >
            {option === 1
              ? "Sign in"
              : option === 2
              ? "Sign up"
              : "Reset password"}
          </button>
          <Error error={error} />
          {option === 3 && !error && !loading && called && (
            <Success message={successMessage}></Success>
          )}
        </form>
      )}
    </Mutation>
  );
};

const Auth = () => {
  const [option, setOption] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  return (
    <AnimatedFormStyles>
      <ul className="options">
        <li
          className={option === 1 ? "active" : ""}
          onClick={() => setOption(1)}
        >
          Sign in
        </li>
        <li
          className={option === 2 ? "active" : ""}
          onClick={() => setOption(2)}
        >
          Sign up
        </li>
        <li
          className={option === 3 ? "active" : ""}
          onClick={() => setOption(3)}
        >
          Forgot
        </li>
        <li>
          <img src="/logo.svg" alt="" width="70" />
        </li>
      </ul>
      <Form
        option={option}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      ></Form>
    </AnimatedFormStyles>
  );
};

export default Auth;
