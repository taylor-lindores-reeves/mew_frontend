import { AnimatedFormStyles } from "./styles/FormStyles";
import Success from "./Success";
import Error from "./Error";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import propTypes from "prop-types";
import Link from "next/link";

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      message
    }
  }
`;

class Reset extends Component {
  static propTypes = {
    resetToken: propTypes.string.isRequired
  };

  state = {
    password: "",
    confirmPassword: "",
    message: ""
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }}
      >
        {(reset, { error, loading, called }) => (
          <AnimatedFormStyles>
            <h2 className="reset">Reset Your Password</h2>
            <form
              className="account-form"
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await reset();
                this.setState({
                  password: "",
                  confirmPassword: "",
                  message: res.data.resetPassword.message
                });
              }}
            >
              <div className={"account-form-fields"}>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="New Password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
                <input
                  id="repeat-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </div>

              <button
                disabled={loading}
                aria-busy={loading}
                className="btn-submit-form"
                type="submit"
              >
                Reset Password
              </button>
              {!loading && called && (
                <Link href="/">
                  <a className="link-submit-form">Go Back to Home</a>
                </Link>
              )}
              {!error && !loading && called && (
                <Success message={this.state.message}></Success>
              )}
              <Error error={error} />
            </form>
          </AnimatedFormStyles>
        )}
      </Mutation>
    );
  }
}

export default Reset;
