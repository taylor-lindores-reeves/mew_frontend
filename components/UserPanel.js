import React, { Component } from "react";
import User from "./User";
import styled from "styled-components";
import Link from "next/link";
import Modal from "./Modal";

const App = styled.div`
  display: grid;
  grid-template-rows: 2fr 11fr 1fr;
  align-items: center;
  justify-items: center;
  height: 100vh;

  .user-header {
    width: 80%;

    &__inner {
      position: relative;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      box-shadow: 0 2px 1px ${props => props.theme.grey};
      background-color: ${props => props.theme.white};
      border-radius: 5px;
      overflow: hidden;
    }

    &__nav {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__col {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__item {
      margin: 10px 20px;

      a {
        color: ${props => props.theme.dark};
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  .user-content {
    background-color: white;
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 1px ${props => props.theme.grey};
    background-color: ${props => props.theme.white};
    border-radius: 5px;

    &__inner {
      padding: 10px 20px;
    }
  }
`;

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { popUp: false };
  }

  togglePopUp() {
    this.setState({
      popUp: !this.state.popUp
    });
  }

  render() {
    return (
      <User>
        {({ data }) => {
          if (!data) return <p>Hey no user</p>;
          return (
            <App>
              <div className="user-header">
                <div className="user-header__inner">
                  <div className="user-header__nav">
                    <ul className="user-header__col">
                      <li className="user-header__item">
                        <h3>{data.user.email}</h3>
                      </li>
                    </ul>
                    <ul className="user-header__col">
                      <li className="user-header__item">
                        <button onClick={this.togglePopUp.bind(this)}>
                          Click To Launch Popup
                        </button>
                        {this.state.popUp && (
                          <Modal
                            isVisible={this.state.popUp}
                            togglePopUp={this.togglePopUp.bind(this)}
                          />
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="user-content">
                <div className="user-content__inner">
                  <p>Thanks for signing up!</p>
                </div>
              </div>
            </App>
          );
        }}
      </User>
    );
  }
}

export default UserPanel;
