import Reset from "../components/Reset";

const ResetPasswordPage = props => {
  return <Reset resetToken={props.query.resetToken} />;
};

export default ResetPasswordPage;
