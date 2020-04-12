import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import Router from "next/router";

const LOG_OUT_MUTATION = gql`
  mutation LOG_OUT_MUTATION {
    logout {
      message
    }
  }
`;

class LogOutButton extends Component {
  render() {
    return (
      <Mutation
        mutation={LOG_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(logout, { error, loading, data }) => {
          if (error) return <p>error</p>;
          if (loading) return <p>loading</p>;
          return (
            <a
              onClick={e => {
                e.preventDefault();
                logout();
                Router.push({ pathname: "/" });
              }}
            >
              Log Out Button
            </a>
          );
        }}
      </Mutation>
    );
  }
}

export default LogOutButton;
