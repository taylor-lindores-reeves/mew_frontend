import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const SuccessStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  border-radius: 5px;

  p {
    color: #000;
    margin: 0;
    font-weight: 500;
  }

  strong {
    margin-right: 1rem;
  }
`;

const DisplaySuccess = ({ message }) => {
  if (!message) return null;
  return (
    <SuccessStyles>
      <p data-test="success-message">
        <strong>Success!</strong>
        {message}
      </p>
    </SuccessStyles>
  );
};

DisplaySuccess.defaultProps = {
  message: {}
};

DisplaySuccess.propTypes = {
  message: PropTypes.object
};

export default DisplaySuccess;
