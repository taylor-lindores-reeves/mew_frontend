import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

export const AnimatedFormStyles = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 100px;
  height: 100%;
  margin: 0 auto;
  max-width: 300px;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 25vh;

  > header {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 auto 60px auto;
    position: relative;
    height: 40px;
    width: 250px;
    overflow: hidden;
  }

  .options {
    display: flex;
    align-items: center;
    width: 250px;

    @media screen and (max-width: 380px) {
      width: 100%;
    }

    > li {
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.2s ease;

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
      }

      &:nth-of-type(2) {
        margin-left: 15px;
      }

      &:nth-of-type(3) {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-left: 15px;
        margin-right: -15px;
        cursor: default;
        opacity: 1;
      }
    }
  }

  .account-form {
    display: flex;
    flex-direction: column;
  }

  .account-form-fields {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &.sign-in {
      max-height: 116px;
    }

    &.sign-up {
      max-height: 250px;
    }

    &.forgot {
      max-height: 57px;
    }

    > input {
      border: 0;
      margin-bottom: 10px;
      padding: 15px;
      font-size: 1rem;
      color: #000;
      border-radius: 5px;

      &::placeholder {
        color: #aaa;
      }

      &::-webkit-input-placeholder {
        color: #aaa;
      }

      &:-ms-input-placeholder {
        color: #aaa;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .link-submit-form {
    color: ${props => props.theme.white};
    text-decoration: none;
    margin-top: 32px;
  }

  .reset {
    margin-bottom: 16px;
    font-size: 18px !important;
  }

  .btn-submit-form {
    border: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    padding: 15px 0;
    border-radius: 5px;
    color: ${props => props.theme.dark};
    font-size: 1rem;
    background: lighten(${props => props.theme.white}, 5%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.13);
    transition: all 0.2s ease;

    &:hover {
      background: darken(${props => props.theme.white}, 2%);
    }

    &:active,
    &:focus {
      outline: none;
      background: darken(${props => props.theme.white}, 7%);
    }

    &[disabled] {
      opacity: 0.5;
    }

    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;
