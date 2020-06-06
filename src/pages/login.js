import React, { useState } from 'react'
import { connect } from 'react-redux'
import { requestOtp } from '../store/actions/register.action';
import { authenticated } from '../store/actions/session.action';

function Login(props) {
  const [ email, setEmail ] = useState('')
  const [ otp, setOtp ] = useState('')
  const { session, submitUserName, login } = props

  console.log(session)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!email) {
      return alert('email cannot be empty')
    }
    if(!otp) {
      return alert('otp cannot be empty')
    }
    login(email, otp)
  }

  const setValues = (e) => {
    e.preventDefault()
    if(e.target.name === "email") {
      setEmail(e.target.value)
    } else if(e.target.name === "otp") {
      setOtp(e.target.value)
    }
  }

  const generateOtp = () => {
    if(!email) {
      return alert('email cannot be empty')
    }
    submitUserName(email)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input type="email"
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
        <input type="password"
          className="form-control"
          id="inputOtp"
          name="otp"
          placeholder="OTP"
          value={otp}
          onChange={setValues}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => generateOtp()}>Generate Otp</button>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
  session: state.session,
})

const mapDispatchToProps = dispatch => ({
  submitUserName: (username) => dispatch(requestOtp(username)),
  login: (username, verification_code) => dispatch(authenticated(username, verification_code))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)