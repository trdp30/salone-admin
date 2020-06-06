import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user.action';

function Login(props) {
  const [ email, setEmail ] = useState('')
  const [ otp, setOtp ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    props.login(
      {
        email: email,
        otp: otp
      }
    )
  }

  const setValues = (e) => {
    e.preventDefault()
    if(e.target.name === "email") {
      setEmail(e.target.value)
    } else if(e.target.name === "otp") {
      setOtp(e.target.value)
    }
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
export default connect(null, { login })(Login)