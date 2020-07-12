import React, { useState } from "react";
import { connect } from "react-redux";
import { requestOtp } from "../store/actions/register.action";
import { authenticated } from "../store/actions/session.action";

function Login(props) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const { session, submitUserName, login } = props;

  console.log(session);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("email cannot be empty");
    }
    if (!otp) {
      return alert("otp cannot be empty");
    }
    login(email, otp);
  };

  const setValues = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "otp") {
      setOtp(e.target.value);
    }
  };

  const generateOtp = () => {
    if (!email) {
      return alert("email cannot be empty");
    }
    submitUserName(email);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            name="email"
            value={email}
            placeholder="Email address"
            aria-describedby="emailHelp"
            onChange={setValues}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputOtp">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputOtp"
            name="otp"
            placeholder="OTP"
            value={otp}
            onChange={setValues}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => generateOtp()}
        >
          Generate Otp
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <>
 <div className="container" style={{paddingTop : "14vh"}}> 
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3 style={{textAlign : 'center'}}>Member Login</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username"/>
					</div>

					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"/>
					</div>

					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>

					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
          
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center">
					<a href="#" style={{color : 'yellow'}}>Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  submitUserName: (username) => dispatch(requestOtp(username)),
  login: (username, verification_code) =>
    dispatch(authenticated(username, verification_code)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
