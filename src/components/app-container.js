import React, { Fragment, useLayoutEffect, useState } from 'react';
import NavBar from './nav-bar';
import { withRouter } from 'react-router-dom';
import { includes } from 'lodash';

const unAuthenticatedRoute = [
  '/login', '/logout', '/register'
]

function AppContainer(props) {
  console.log(props)
  const { location } = props
  const [ showContainer, toggleContainer ] = useState(false)

  useLayoutEffect(() => {
    if(location && location.pathname && location.pathname.length) {
      let isValid = !includes(unAuthenticatedRoute, location.pathname)
      toggleContainer(isValid)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  if(showContainer) {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          {props.children}
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default  withRouter(AppContainer);