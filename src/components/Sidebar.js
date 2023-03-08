import React from "react";
import '../style/App.css'
import LoginButton from './login';
import LogoutButton from './logout';
import { withAuth0 } from "@auth0/auth0-react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
          <div className="sidebar">
            <h3 className="menu">My Profile</h3>
          </div>
          <div className="logoutButton">
            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
      </>
    )
  }
}



export default withAuth0(Sidebar);

