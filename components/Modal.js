import React, { Component } from "react";
import styled from "styled-components";
import LogOutButton from "./LogOutButton";
import { CSSTransition } from "react-transition-group";

const ModalStyles = styled.div`
  position: fixed;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    position: absolute;
    width: 250px;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 1);
  }

  .description {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.65;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 2rem;
    transform: scaleX(1.2);
    transform-origin: 100% 0%;
    color: ${props => props.theme.dark};
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.red};
  }

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .alert-exit {
    opacity: 1;
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

class Modal extends Component {
  render() {
    return (
      <ModalStyles>
        <CSSTransition
          in={this.props.isVisible}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => this.props.togglePopUp}
          onExited={() => this.props.togglePopUp}
        >
          <div className="inner">
            <h2 className="section-title section-title--blue section-title--less-margin">
              Are you sure you want to log out?
            </h2>
            <div className="wrapper wrapper--narrow">
              <LogOutButton />
              <div onClick={this.props.togglePopUp} className="close">
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </ModalStyles>
    );
  }
}

// TODO MODAL TRANSITIONS

export default Modal;
